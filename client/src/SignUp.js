import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    voterId: ''
  });
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [passwordConstraints, setPasswordConstraints] = useState(''); // Initialize with empty string or default constraints message

  useEffect(() => {
    // Set initial password constraints message
    const initialConstraints = 'Password must be at least 8 characters long, contain at least one digit, and one special character.';
    setPasswordConstraints(initialConstraints);
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailVerify = async () => {
    try {
      console.log('Email to be verified:', formData.email);
      const response = await axios.post('http://localhost:3001/sendotp', { email: formData.email });
      if (response.status === 200) {
        setEmailVerificationSent(true);
        setVerificationStatus('');
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
      console.log('Entered OTP:', otp);
      const response = await axios.post('http://localhost:3001/verifyotp', { email: formData.email, enteredOTP: otp });
      if (response.status === 200) {
        setVerificationStatus(response.data.message);
        // Clear OTP from state on successful verification
        setOTP('');
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

  // Check if password and confirm password match
  if (formData.password !== formData.confirmPassword) {
    alert('Password and confirm password do not match.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:3001/signup', formData);
    if (response.status === 200) {
      alert('User signed up successfully!');
      // Redirect to the voter page after successful signup
      window.location.href = '/VoterPage';
    } else {
      throw new Error('Signup failed');
    }
  } catch (error) {
    console.error(error);
    alert('Signup failed. Please check details.');
  }
};

const handlePasswordChange = (e) => {
  const password = e.target.value;
  // Password constraints
  const constraints = [];
  if (password.length < 8) {
    constraints.push('Password must be at least 8 characters long.');
  }
  if (!/\d/.test(password)) {
    constraints.push('Password must contain at least one digit.');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    constraints.push('Password must contain at least one special character.');
  }
  const constraintsMessage = constraints.length > 0 ? constraints.join(' ') : 'Password meets requirements.';
  setPasswordConstraints(constraintsMessage);
  setFormData({ ...formData, password });
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
    <input type="password" id="password" name="password" value={formData.password} onChange={handlePasswordChange} required />
    {/* Password constraints displayed here */}
    {passwordConstraints && <p className="password-constraints">{passwordConstraints}</p>}    
    <br></br>
    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
    <label htmlFor="voterId">Voter ID Number:</label>
    <input type="text" id="voterId" name="voterId" value={formData.voterId} onChange={handleChange} required />
    <button type="submit">Sign Up</button>
  </form>
  <p className="link-text">Already a user? <Link to="/login">Login</Link></p>
  {verificationStatus && <p className="verification-message">{verificationStatus}</p>}
</div>

  );
};

export default SignUp;
