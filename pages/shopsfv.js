import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shopsfv from '../components/Shopsfv';
import Head from 'next/head';

const ShopsfvPage = () => {
    return (
        <div>
            <Head>
                <title>Shop SFV | BudzDeli</title>
                <meta name="description" content="Dependable Weed Delivery" />
            </Head>
            <Header />
            <main>
                <Shopsfv />
            </main>
            <Footer />
        </div>
    );
};

export default ShopsfvPage;
