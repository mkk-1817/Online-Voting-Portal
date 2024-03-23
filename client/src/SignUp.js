import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignUp.css'; 

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
      console.log('Email to be verified:', formData.email); // Log the email input
      const response = await axios.post('http://localhost:3001/sendotp', { email: formData.email });
      if (response.status === 200) {
        setVerificationStatus('');
        setEmailVerificationSent(true);
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.error(error);
      setVerificationStatus('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3001/verifyotp', { otp: otp });
      if (response.status === 200) {
        setVerificationStatus(response.data.message);
      } else {
        throw new Error('Invalid OTP');
      }
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

    try {
      const response = await axios.post('http://localhost:3000/signup', formData);
      if (response.status === 200) {
        alert('User signed up successfully!');
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    }

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
            <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
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
      {verificationStatus && <p className="verification-message">{verificationStatus}</p>}
    </div>
  );
};

export default SignUp;
