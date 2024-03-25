const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
const uri = 'mongodb+srv://karthikkrishna230104:be_alone@cluster0.eg6w25h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// In-memory storage for email verification and OTP
const emailVerificationStore = new Map();
const otpStore = new Map();
// MongoDB client
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Assuming you're using Gmail. You can use any other SMTP service here.
  auth: {
    user: '71762133044@cit.edu.in', // Your email address
    pass: 'mani@2133044' // Your email password (make sure to use app password or enable less secure apps for Gmail)
  }
});

// Route to send OTP to the provided email
app.post('/sendotp', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  try {
    // Store the OTP in otpStore
    otpStore.set(email, otp);

    // Send email with OTP
    const info = await transporter.sendMail({
      from: '71762133044@cit.edu.in',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP for verification is: ${otp}`
    });

    console.log('Email sent: ', info.response);
    res.status(200).send('OTP sent successfully');
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send('Failed to send OTP');
  }
});

// Route to verify OTP
app.post('/verifyotp', (req, res) => {
  const { email, enteredOTP } = req.body;

  try {
    // Retrieve the stored OTP from otpStore
    const storedOTP = otpStore.get(email);

    if (storedOTP && storedOTP.toString() === enteredOTP.toString()) {
      // If OTP matches, delete it from otpStore (optional)
      otpStore.delete(email);
      res.status(200).send({ message: 'OTP verification successful' });
    } else {
      res.status(400).send({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP: ', error);
    res.status(500).send('Failed to verify OTP');
  }
});


async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");

        // Database and collection name
        const dbName = 'Voting_portal';
        const collectionName = 'Users';

        // Access your collection
        const collection = client.db(dbName).collection(collectionName);

        // Define a function to insert user data into the collection
async function addUser(userData) {
    const { username, voterId } = userData;
    
    // Check if the username or voterId already exists
    const existingUser = await collection.findOne({ $or: [{ username }, { voterId }] });
    if (existingUser) {
        throw new Error('Username or voter ID already exists');
    }

    // If not, insert the new user data
    await collection.insertOne(userData);
    console.log("User data inserted into the database");
}

        async function addVoteDetails(voterId, partyId) {
          try {
            const dbName = 'Voting_portal';
            const collectionName = 'VoteDetails';
            const collection = client.db(dbName).collection(collectionName);
            await collection.insertOne({ voterId, partyId });
            console.log("Vote details added to the database");
          } catch (error) {
            console.error('Error adding vote details:', error);
          }
        }
        
        // Route to handle vote submission
        app.post('/submitvote', async (req, res) => {
          try {
            const { voterId, partyId } = req.body;
            await addVoteDetails(voterId, partyId);
            res.status(200).json({ message: 'Vote submitted successfully' });
          } catch (error) {
            console.error('Error submitting vote:', error);
            res.status(500).json({ message: 'Failed to submit vote' });
          }
        });
        // Define the '/signup' endpoint
// Define the '/signup' endpoint
app.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        // Call the function to insert user data into the collection
        await addUser(userData);
        res.status(200).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up user:', error);
        if (error.message === 'Username or voter ID already exists') {
            res.status(400).json({ message: 'Username or voter ID already exists' });
        } else {
            res.status(500).json({ message: 'Failed to sign up user' });
        }
    }
});


    } catch (err) {
        console.error("Error occurred:", err);
    }
    
}

main();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectToMongoDB();
});
