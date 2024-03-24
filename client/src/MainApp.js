// MainApp.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; 

const MainApp = () => {
  return (
    <div className="main-container">
      <h1 className="welcome-message">Welcome to the Online Voting Portal</h1>
      <div className="auth-links">
        <Link to="/login" className="auth-link">Login</Link>
        <Link to="/signup" className="auth-link">Sign Up</Link>
      </div>
    </div>
  );
}

export default MainApp;