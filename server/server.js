const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// In-memory storage for email verification and OTP
const emailVerificationStore = new Map();
const otpStore = new Map();

// Create a Nodemailer transporter
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

// Route for user signup
app.post('/signup', (req, res) => {
  const { username, email, mobile, password, voterId } = req.body;
  // In a real-world scenario, you'd perform validation and store user data in a database
  console.log(`User signed up - Username: ${username}, Email: ${email}`);
  res.status(200).send('User signed up successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
