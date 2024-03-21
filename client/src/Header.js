import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <div className="header">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Header;
