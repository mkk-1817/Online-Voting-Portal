import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import './about.css';
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

    // State to store the selected party
    const [selectedParty, setSelectedParty] = useState('');

    // Function to handle party selection
    const handlePartySelection = (partyID) => {
        setSelectedParty(partyID);
    };

    // Function to submit the vote
    const submitVote = () => {
        // Perform actions to submit the vote
        console.log('Vote submitted for party:', selectedParty);
        // Add your logic to submit the vote here
    };

    return (
        <div>
            <Header />
            <div className="body-background">
            <div className="wrapper1">
            <Link to="/about">
                    <span className="icon-close" id="redirectButton2"> 
                        <IonIcon icon={closeOutline} />
                    </span>
                </Link>
                <div className="form-box2 login">
                    <h2>About</h2>
                    <br />
                    <hr />
                    <br />
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
                    <button onClick={submitVote} disabled={!selectedParty}>Submit Vote</button>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default VoterPage;
