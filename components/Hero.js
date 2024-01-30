import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (

        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <img src="../img/headingLogo.png" alt="headinglogo" />
                <p>
                    <span className="typed" data-typed-items="Experience, Indulge, Elevate, Revitalize, Enjoy, Rejuvenate, Relax"></span>
                </p>
                <div className="shop-buttons">
                    <Link href="/shopla" className="shop-button">Shop LA</Link>
                    <Link href="/shopsfv" className="shop-button">Shop SFV</Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
