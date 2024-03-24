import React from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
    return (
        <div className="body-background">
            <div className="wrapper1">
                <Link to="/voterpage">
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
                        <li>
                            Online voting systems prioritize security, employing methods like secure login credentials, multi-factor authentication, and encryption to maintain the election process's integrity.
                        </li>
                        <li>
                            Voter registration typically involves online verification of identity through official documents.
                        </li>
                        <li>
                            Websites hosting these systems focus on user-friendly interfaces and accessibility features to ensure an intuitive and inclusive voting experience.
                        </li>
                        <li>
                            Platforms provide comprehensive information about candidates, parties, and election issues, including candidate profiles, party platforms, and policy details.
                        </li>
                        <li>
                            The voting process involves selecting candidates or indicating preferences on issues, guided by clear instructions to minimize confusion.
                        </li>
                        <li>
                            Post-vote, confirmation messages are common, and systems may enable voters to verify their votes for accuracy.
                        </li>
                        <li>
                            Various security measures, such as encryption, blockchain tech, and secure servers, prevent fraud and unauthorized access.
                        </li>
                        <li>
                            Adherence to national and regional laws, especially privacy laws, is crucial to safeguard voter information.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
