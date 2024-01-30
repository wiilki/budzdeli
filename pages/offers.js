import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/Offers';

const OffersPage = () => {
    return (
        <div>
            <Header />
            <main>
                <Offers />
            </main>
            <Footer />
        </div>
    );
};

export default OffersPage;
