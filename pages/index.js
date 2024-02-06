import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Head from 'next/head';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Dependable Weed Delivery | BudzDeli</title>
                <meta name="description" content="Dependable Weed Delivery" />
            </Head>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />

        </>
    );
};

export default HomePage;
