import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import MainApp from './MainApp';
import VoterPage from './VoterPage';
import About from './about';
import Contact from './contact';
import Motto from './motto';
import Result from './Result'; // Corrected import statement for Result component

function App() {
  return (
    <Router>
      <div>
        {/* Render the Header component */}
        <div className="container">
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/voterpage" element={<VoterPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/motto" element={<Motto />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
