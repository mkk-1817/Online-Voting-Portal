import React from 'react';
import './contact.css';
import Logoutheader from './Logoutheader'; // Import the Logoutheader component
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Contact() {
    return (
        <div className="body-background">
            <Logoutheader /> {/* Include the Logoutheader component */}
            <div className="wrapper2">
                <Link to="/voterpage"> {/* Link to the voter page */}
                    <span className="icon-close" id="redirectButton2"> 
                        <IonIcon icon={closeOutline} />
                    </span>
                </Link>
                <div className="form-box login">
                    <h2>Contact Information</h2>
                    <hr />
                    <br />
                    <h3>Helpline Number: <a href="tel:+91 1122334455"><callOutline /> +91 1122334455</a></h3>
                    <h3>Email: <a href="Email:electioncommission@ind.com"><mailOutline /> electioncommission@ind.com</a></h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
