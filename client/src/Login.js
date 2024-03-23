import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const response = await axios.post('/login', formData);
      console.log(response.data.message);
      alert('Login successful!');
      // Redirect or perform other actions after successful login
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
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <p className="link-text">New to portal? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
