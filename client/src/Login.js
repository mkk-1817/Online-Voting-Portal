import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      console.log(response.data.message);
      alert('Login successful!');
      setLoginSuccess(true); // Set login success to true
    } catch (error) {
      console.error(error.response.data.message);
      alert('Login failed. Please check your credentials and try again.');
    }
    setIsLoggingIn(false);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Username:</label>
        <input type="username" id="username" name="username" value={formData.username} onChange={handleChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging In...' : 'Login'}
        </button>
      </form>
      {/* Conditionally render Link to VoterPage if login is successful */}
      {loginSuccess && <Link to="/voterpage">Proceed to Voter Page</Link>}
      <p className="link-text">New to portal? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;