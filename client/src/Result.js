import React from 'react';
import './contact.css'; // Assuming you have a CSS file for styling
import Logoutheader from './Logoutheader'; // Import the Logoutheader component
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Result() {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + 15);

    // Format the future date for display
    const formattedDate = futureDate.toDateString();

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
                    <h3>Results to be published through NEWS on {formattedDate}</h3>
                </div>
            </div>
        </div>
    );
}

export default Result;
