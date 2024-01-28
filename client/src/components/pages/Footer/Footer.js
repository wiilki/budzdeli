import React from "react";
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer({ handlePageChange }) {

    const handleFooterLinkClick = (page) => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
        // Call the passed handlePageChange function
        handlePageChange(page);
    };

    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    {/* 1st Column */}
                    <div className="col">
                        <div className="la-info">
                            <h1>BudzDeli - LA</h1>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /> <span>Delivery/Pickup<br></br>5067 W Washington Blvd <br/> Los Angeles, CA 90016</span></p>
                            <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+13238660572">(323) 866-0572</a></p>
                        </div>

                        <div className="sfv-info">
                            <h1>BudzDeli - SFV</h1>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /> <span>Delivery Only <br/>16770 Stagg Street  <br/> Van Nuys, CA 91406</span></p>
                            <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+13238660572">(818) 717-7742</a></p>
                        </div>
                    </div>

                    {/* 2nd Column - Quick Links */}
                    <div className="col quick-links">
                        <h1>Quick Links</h1>                        
                        <a href="#ShopLA" onClick={(e) => {e.preventDefault(); handleFooterLinkClick('ShopLA')}}>Shop LA</a>
                        <a href="#ShopSFV" onClick={(e) => {e.preventDefault(); handleFooterLinkClick('ShopSFV')}}>Shop SFV</a>
                        <a href="#Contact" onClick={(e) => {e.preventDefault(); handleFooterLinkClick('Contact')}}>Contact</a>
                        <a href="#About" onClick={(e) => {e.preventDefault(); handleFooterLinkClick('About')}}>About</a>
                    </div>

                    {/* 3rd Column */}
                    <div className="col">
                        <p><FontAwesomeIcon icon={faClock} /> Open 9AM-9:30PM, 7 days/week</p>
                        <div className="social-links">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/budz_deli" ><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="mailto:labudzdeli@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
                        </div>
                        <p>License: C10-0000513-LIC</p>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="row">
                    <div className="col">
                        <p className="disclaimer">
                            Disclaimer: This product is not for use by or sale to persons under the age of 21. Consult with a physician before use if you have a serious medical condition or use prescription medications. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. By using this site you agree to follow the Privacy Policy and all Terms & Conditions printed on this site.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="row">
                    <div className="col">
                        <div className="copyright">
                            &copy; Copyright <strong><span>NexaTech Solutions LLC</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
