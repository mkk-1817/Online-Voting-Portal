import React from 'react';
import './motto.css';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons'; // Import the specific icon
<<<<<<< HEAD
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
=======
>>>>>>> f6de33f53dcf7750f382b8eb22310ee95bf816c1

function Motto() {
    return (
        <div className="body-background">
            <div className="wrapper3"> {/* Changed from wrapper to wrapper3 */}
<<<<<<< HEAD
                <Link to="/voterpage"> {/* Link to the voter page */}
                    <span className="icon-close" id="redirectButton2"> {/* Same class name */}
                        <IonIcon icon={closeOutline} />
                    </span>
                </Link>
=======
                <span className="icon-close" id="redirectButton2"> {/* Same class name */}
                    <IonIcon icon={closeOutline} />
                </span>
>>>>>>> f6de33f53dcf7750f382b8eb22310ee95bf816c1
                <div className="form-box1 login">
                    <h2>Motto!</h2>
                    <hr />
                    <br />
                    <h3>
                        "Empowering Democracy: Secure and Convenient Online Voting Made Easy - Your Voice, Your Choice, Your Way!"
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Motto;
