import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ["Experience", "Indulge", "Elevate", "Revitalize", "Enjoy", "Rejuvenate", "Relax"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="hero-image-container" data-aos="zoom-in" data-aos-delay="100">
                <Image src="/img/logo.png" alt="headinglogo" width={850} height={358} className='bdlogo'/>
                <h3>BUDZDELI</h3>
                <p className="hero-words">
                    <span className="fade-in">{words[currentWord]}</span>
                </p>
                <div className="hero-shop-buttons">
                    <Link href="/shopla" className="hero-shop-button">Shop LA</Link>
                    <Link href="/shopsfv" className="hero-shop-button">Shop SFV</Link>
                </div>
                <div className='wmlogo'>
                    <Image src="/img/wm.png" alt="headinglogo" width={200} height={200} className="logo-image" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
