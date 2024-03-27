const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Update with your email service provider
  auth: {
    user: '71762133044@cit.edu.in',
    pass: 'mani@2133044' // Update with your email password
  }
});

// Define email options
const mailOptions = {
  from: '71762133044@cit.edu.in', // Update with your email address
  to: 'subramanian160104@gmail.com', // Update with recipient's email address
  subject: 'Test Email',
  text: 'This is a test email sent from Nodemailer.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
