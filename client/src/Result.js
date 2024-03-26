import React from 'react';
import './';
import Logoutheader from './Logoutheader'; 
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom'; 

function Contact() {
    const today = new Date();

    
    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + 15);
    return (
        <div className="body-background">
            <Logoutheader /> 
            <div className="wrapper2">
                <Link to="/voterpage"> {/* Link to the voter page */}
                    <span className="icon-close" id="redirectButton2"> 
                        <IonIcon icon={closeOutline} />
                    </span>
                </Link>
                <div className="form-box login">
                    <h3>Results to be published through NEWS on {futureDate}</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
