import React from 'react';
import Image from 'next/image';

function Hero() {
    return (

        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <img src="../img/headingLogo.png" alt="headinglogo" />
                <p>
                    <span className="typed" data-typed-items="Experience, Indulge, Elevate, Revitalize, Enjoy, Rejuvenate, Relax"></span>
                </p>
                <div className="shop-buttons">
                    <a href="/shopla" className="shop-button">Shop LA</a>
                    <a href="/shopsfv" className="shop-button">Shop SFV</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
