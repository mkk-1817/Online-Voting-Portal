import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import './VoterPage.css';
import axios from 'axios';
import Header from './Logoutheader.js';

function VoterPage() {
    // Statically stored party details
    const partiesList = [
        {
            PartyID: "INC",
            PartyName: "Indian National Congress",
            PartyLeader: "Sonia Gandhi"
        },
        {
            PartyID: "BJP",
            PartyName: "Bharatiya Janata Party",
            PartyLeader: "Narendra Modi"
        },
        {
            PartyID: "AAP",
            PartyName: "Aam Aadmi Party",
            PartyLeader: "Arvind Kejriwal"
        },
        {
            PartyID: "BSP",
            PartyName: "Bahujan Samaj Party",
            PartyLeader: "Mayawati"
        },
        {
            PartyID: "CPI(M)",
            PartyName: "Communist Party of India (Marxist)",
            PartyLeader: "Sitaram Yechury"
        }
    ];

    const [selectedParty, setSelectedParty] = useState('');
    const [voterId, setVoterId] = useState('');
    const [showPartyList, setShowPartyList] = useState(false);

    // Function to handle party selection
    const handlePartySelection = (partyID) => {
        setSelectedParty(partyID);
    };

    // Function to handle VoterID input change
    const handleVoterIdChange = (event) => {
        const inputValue = event.target.value;

        // Regular expression to match the required format: first 3 letters followed by 7 digits
        const voterIdRegex = /^[a-zA-Z]{3}\d{7}$/;

        // Check if the input matches the required format and has a length of 10 characters
        if (voterIdRegex.test(inputValue) || inputValue === '' || inputValue.length < 10) {
            setVoterId(inputValue);
        }
    };

    // Function to toggle showing the party list
    const togglePartyList = () => {
        setShowPartyList(!showPartyList);
    };

    // Function to submit the vote
    const submitVote = async () => {
        try {
            // Check if VoterID and selected party are provided
            if (!voterId || !selectedParty) {
                alert('Please provide both VoterID and select a party');
                return;
            }

            // Check if VoterID is in the correct format
            const voterIdRegex = /^[a-zA-Z]{3}\d{7}$/;
            if (!voterIdRegex.test(voterId)) {
                alert('VoterID is not in the correct format. Please enter a valid VoterID.');
                return;
            }

            // Make a POST request to submit the vote
            await axios.post('http://localhost:3001/submitvote', { voterId, partyName: selectedParty });
            alert('Vote submitted successfully');
            // Navigate to the Result page
            window.location.href = '/Result';

        } catch (error) {
            console.error(error.response.data.message);
            alert('Check VoterId or submitted successfully.');
        }
    };

    return (
        <div>
            {!showPartyList && <Header />} {/* Render the Header only if party list is not displayed */}
            <div className="body-background">
                <div className="wrapper1">
                    {showPartyList && (
                        <span className="icon-close" id="redirectButton2" onClick={togglePartyList}> 
                            <IonIcon icon={closeOutline} />
                        </span>
                    )}
                    <div className="form-box2 login">
                        {showPartyList ? (
                            <div>
                                <h2>Vote Now</h2>
                                <br />
                                <hr />
                                <br />
                                <input type="text" placeholder="Voter ID" value={voterId} onChange={handleVoterIdChange} />
                                <ul> 
                                    {partiesList.map(party => (
                                        <li key={party.PartyID}>
                                            <input
                                                type="radio"
                                                id={party.PartyID}
                                                name="party"
                                                value={party.PartyID}
                                                checked={selectedParty === party.PartyID}
                                                onChange={() => handlePartySelection(party.PartyID)}
                                            />
                                            <label htmlFor={party.PartyID}>
                                                {party.PartyName} - {party.PartyLeader}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={submitVote} disabled={!selectedParty || !voterId}>Submit Vote</button>
                            </div>
                        ) : (
                            <div>
                                <h2>Welcome to Voter Page</h2>
                                <br />
                                <Link to="#" onClick={togglePartyList}>Vote Now</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoterPage;
