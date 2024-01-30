import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
