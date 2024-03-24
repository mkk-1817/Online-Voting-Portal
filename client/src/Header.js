import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
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
=======
export default function header(){
    return(
        <div>
            <header style={{ padding: '10px 50px' }}>
                <h2 class="OnlineVoting" style={{color: '#d2b200', fontFamily: 'Times New Roman', fontSize: '3em', marginBottom: '15px'}}>Online Voting</h2>
                <nav class="navigation">
                    <a href="/">Home</a>
                    <Link to="/motto">Motto</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/main"  class="btnlogin-popup" style={{padding: '10px 15px', backgroundColor: '#d2b200', color: '#fff'}}>Login</Link>
                    <Link to="/admin"  class="btnlogin-popup" id="redirectButton" onClick={"/admin"} style={{padding: '10px 15px', backgroundColor: '#d2b200', color: '#fff'}}>Admin</Link>
>>>>>>> f6de33f53dcf7750f382b8eb22310ee95bf816c1
                </nav>
            </header>
        </div>
    )
}
