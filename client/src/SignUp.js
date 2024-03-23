import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailVerify = async () => {
    try {
      await axios.post('http://localhost:5000/sendotp', { email: formData.email });
      setEmailVerificationSent(true);
      setVerificationStatus('');
    } catch (error) {
      console.error(error);
      setVerificationStatus('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verifyotp', { otp, enteredOTP: otp });
      setVerificationStatus(response.data.message);
    } catch (error) {
      console.error(error);
      setVerificationStatus('Invalid OTP. Please try again.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!emailVerificationSent) {
      setVerificationStatus('Please verify your email first.');
      return;
    }

    // Your signup logic here
    // This is where you would send the form data to your backend for user registration
    // Example:
    // try {
    //   await axios.post('/signup', formData);
    //   alert('User signed up successfully!');
    // } catch (error) {
    //   console.error(error);
    //   alert('Signup failed. Please try again.');
    // }

    // For demonstration purposes, just log the form data
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <div className="input-with-button">
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <button type="button" className="verify-button" onClick={handleEmailVerify} disabled={emailVerificationSent}>
            {emailVerificationSent ? 'Verified' : 'Verify'}
          </button>
        </div>
        {emailVerificationSent && (
          <div className="otp-container">
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
            <button type="button" onClick={handleVerifyOTP}>Submit</button>
          </div>
        )}
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <p className="link-text">Already a user? <Link to="/login">Login</Link></p>
      {verificationStatus && <p>{verificationStatus}</p>}
    </div>
  );
};

export default SignUp;
