import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Head from 'next/head';

const AboutPage = () => {
    return (
        <div>
                 <Head>
                <title>About Us | BudzDeli</title>
                <meta name="description" content="Dependable Weed Delivery" />
            </Head>
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
