import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShoplaPage = () => {
    return (
        <div>
              <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <Header />
            <main>
                <iframe src="/shopla.html" style={{ width: '100%', height: '600px', border: 'none' }}></iframe>
            </main>
            <Footer />
            <div id="preloader"></div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </div>
    );
};

export default ShoplaPage;

