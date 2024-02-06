import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import Head from 'next/head';

const OffersPage = () => {
    return (
        <div>
            <Head>
                <title>Offers | BudzDeli</title>
                <meta name="description" content="Dependable Weed Delivery" />
            </Head>
            <Header />
            <main>
                <Offers />
            </main>
            <Footer />
        </div>
    );
};

export default OffersPage;
