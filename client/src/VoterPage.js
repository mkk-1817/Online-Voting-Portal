import React from 'react';
import Header from './Header'; // Import the Header component
import './VoterPage.css';

export default function VoterPage() {
    return (
        <div>
            <Header /> {/* Include the Header component */}
            <div className="voter-page-content">
                <h2>Welcome to the Voter Page!</h2>
                {/* Add more content specific to the Voter Page */}
            </div>
        </div>
    );
}
