// Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p className="link-text">New to portal? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
