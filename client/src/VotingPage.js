// VotingPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './about.css';

export default function VotingPage() {
    const [parties, setParties] = useState([]);

    useEffect(() => {
        async function fetchParties() {
            try {
                const response = await axios.get('/api/parties');
                setParties(response.data);
            } catch (error) {
                console.error('Error fetching parties:', error);
            }
        }

        fetchParties();
    }, []);

    return (
        <div>
            <h2>Vote for your favorite party</h2>
            <form>
                {parties.map(party => (
                    <div key={party._id}>
                        <input type="radio" id={party._id} name="party" value={party._id} />
                        <label htmlFor={party._id}>
                            {party.partyName} - {party.partyLeader}
                        </label>
                    </div>
                ))}
                <button type="submit">Submit Vote</button>
            </form>
        </div>
    );
}
