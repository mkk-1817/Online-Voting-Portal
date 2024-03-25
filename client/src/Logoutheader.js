import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function header(){
    return(
        <div>
            <header style={{ padding: '10px 50px' }}>
                <h2 class="OnlineVoting" style={{color: '#d2b200', fontFamily: 'Times New Roman', fontSize: '3em', marginBottom: '15px'}}>Online Voting</h2>
                <nav class="navigation">
                    <a href="/VoterPage">Home</a>
                    <Link to="/motto">Motto</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Logout</Link>
                   
                </nav>
            </header>
        </div>
    )
}
