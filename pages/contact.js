import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Head from 'next/head';

const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>Contact Us | BudzDeli</title>
                <meta name="description" content="Dependable Weed Delivery" />
            </Head>
            <Header />
            <main>
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
