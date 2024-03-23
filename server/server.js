const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// Generate and send OTP via email
app.post('/sendotp', async (req, res) => {
  try {
    const { email } = req.body;
    const otp = randomstring.generate({ length: 6, charset: 'numeric' });

    console.log('Generated OTP:', otp); // Log the generated OTP

    // Configure transporter for sending email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '71762133044@cit.edu.in',
        pass: 'mani@2133044'
      }
    });

    // Configure email options
    const mailOptions = {
      from: '71762133044@cit.edu.in',
      to: email,
      subject: 'Verification Code',
      text: `Your verification code is: ${otp}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('OTP sent to:', email);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

// Verify OTP
app.post('/verifyotp', (req, res) => {
  const { otp, enteredOTP } = req.body;
  if (otp === enteredOTP) {
    res.status(200).json({ message: 'OTP verification successful' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

// Dummy signup endpoint
app.post('/signup', (req, res) => {
  // Dummy response
  res.status(200).json({ message: 'User signed up successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the server.`);
});
