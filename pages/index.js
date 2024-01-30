import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

const HomePage = () => {
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
