import React from "react";
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact container my-5">
            <h1 className="contact-header text-center mb-5">Contact Information</h1>
            <div className="row justify-content-center">
                {/* First Card */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="contact-card">
                        <h5 className="contact-title">BudzDeli LA</h5>
                        <p className="contact-text">
                            5067 W Washington Blvd, Los Angeles, CA 90016<br />
                            <a href="tel:+13238660572">(323) 866-0572</a><br />
                            <a href="mailto:labudzdeli@gmail.com">labudzdeli@gmail.com</a>
                        </p>
                    </div>
                </div>
                {/* Second Card */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="contact-card">
                        <h5 className="contact-title">BudzDeli SFV</h5>
                        <p className="contact-text">
                            Delivery Only:<br />
                            16770 Stagg Street, Los Angeles, CA 91406<br />
                            <a href="tel:+18187177742">(818) 717-7742</a><br />
                            <a href="mailto:sfvbudzdeli@gmail.com">sfvbudzdeli@gmail.com</a>
                        </p>
                    </div>
                </div>
                {/* Third Card */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="contact-card">
                        <h5 className="contact-title">Royal Greens Dispensary</h5>
                        <p className="contact-text">
                            5067 W Washington Blvd, Los Angeles, CA 90016<br />
                            <a href="tel:+13232973224">(323) 297-3224</a><br />
                            <a href="mailto:royalgreensla@gmail.com">royalgreensla@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
