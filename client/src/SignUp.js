// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file for SignUp styling

const SignUp = () => {
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [mobileVerificationSent, setMobileVerificationSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [isMobileVerified, setIsMobileVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleEmailVerify = () => {
    setEmailVerificationSent(true);
  };

  const handleMobileVerify = () => {
    setMobileVerificationSent(true);
  };

  const handleEmailOtpSubmit = () => {
    setIsEmailVerified(true);
  };

  const handleMobileOtpSubmit = () => {
    setIsMobileVerified(true);
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsSigningUp(true);
    setTimeout(() => {
      // Set verification status only when the form is submitted
      setIsEmailVerified(emailVerificationSent);
      setIsMobileVerified(mobileVerificationSent);
      alert('User signed up successfully!');
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="email">Email:</label>
        <div className="input-with-button">
          <input type="email" id="email" name="email" required />
          <button type="button" className="verify-button" onClick={handleEmailVerify} disabled={emailVerificationSent}>
            {emailVerificationSent ? 'Verified' : 'Verify'}
          </button>
          {emailVerificationSent && (
            <div className="otp-container">
              <input type="text" placeholder="Enter OTP" value={emailOtp} onChange={(e) => setEmailOtp(e.target.value)} />
              <button type="button" onClick={handleEmailOtpSubmit}>Submit</button>
            </div>
          )}
        </div>
        <label htmlFor="mobile">Mobile Number:</label>
        <div className="input-with-button">
          <input type="text" id="mobile" name="mobile" required />
          <button type="button" className="verify-button" onClick={handleMobileVerify} disabled={mobileVerificationSent}>
            {mobileVerificationSent ? 'Verified' : 'Verify'}
          </button>
          {mobileVerificationSent && (
            <div className="otp-container">
              <input type="text" placeholder="Enter OTP" value={mobileOtp} onChange={(e) => setMobileOtp(e.target.value)} />
              <button type="button" onClick={handleMobileOtpSubmit}>Submit</button>
            </div>
          )}
        </div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
        <button type="submit" disabled={!isMobileVerified || !isEmailVerified || isSigningUp}>
          {isSigningUp ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <p className="link-text">Already a user? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;
