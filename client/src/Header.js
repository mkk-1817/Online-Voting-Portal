import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header style={{ padding: '10px 50px' }}>
                <h2 className="OnlineVoting" style={{ color: '#d2b200', fontFamily: 'Times New Roman', fontSize: '3em', marginBottom: '15px' }}>Online Voting</h2>
                <nav className="navigation">
                    <Link to="/voterpage">Home</Link> {/* Updated to redirect to "/voterpage" */}
                    <Link to="/motto">Motto</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
        </div>
    )
}
