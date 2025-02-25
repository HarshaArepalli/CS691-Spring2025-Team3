import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Eat & fit</h1>
                <div className="contact-info">
                    <p>Give us a call at:</p>
                    <p>+1 234-567-890</p>
                    <p>For future enquiries & newsletters:</p>
                    <p>Support@eatandfit.com</p>
                </div>
                <div className="footer-links">
                    <div className="resources">
                        <h3>Resources</h3>
                    </div>
                    <div className="support">
                        <h3>Support</h3>
                        <ul>
                            <li>FAQ's</li>
                            <li>Contact us</li>
                            <li>Help Center</li>
                            <li>Ratings</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2025, All Rights Reserved</p>
                <p><a href="/privacy-policy">Privacy & Policy</a> | <a href="/terms-conditions">Terms & Conditions</a></p>
            </div>
        </footer>
    );
};

export default Footer;
