// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Generate and send OTP via email
app.post('/sendotp', async (req, res) => {
  try {
    const { email } = req.body;
    const otp = randomstring.generate({ length: 6, charset: 'numeric' });

    // Configure transporter for sending email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'karthikkrishna230104@gmail.com',
        pass: 'lonernibba'
      }
    });

    // Configure email options
    const mailOptions = {
      from: 'karthikkrishna230104@gmail.com',
      to: email,
      subject: 'Verification Code',
      text: `Your verification code is: ${otp}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
