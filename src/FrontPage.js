// FrontPage.js

import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './FrontPage.css'; // Import CSS for styling

const FrontPage = () => {
    return (
        <div className="front-page-container">
            <div className="image-container">
                {/* Image Display */}
                <img src="path/to/your/image.jpg" alt="Front Page Image" />
            </div>
            <div className="forms-container">
                {/* Sign Up Form */}
                <SignUpForm />
                {/* Sign In Form */}
                <SignInForm />
            </div>
        </div>
    );
};

export default FrontPage;
