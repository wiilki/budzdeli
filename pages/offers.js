import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/Offers';

const OffersPage = () => {
    return (
        <div>
              <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <Header />
            <main>
                <Offers />
            </main>
            <Footer />
            <div id="preloader"></div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </div>
    );
};

export default OffersPage;
