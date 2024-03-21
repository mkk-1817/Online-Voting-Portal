// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="text" id="mobile" name="mobile" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        <button type="submit">Sign Up</button>
      </form>
      <p className="link-text">Already a user? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;
