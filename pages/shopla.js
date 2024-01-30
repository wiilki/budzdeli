import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shopla from '../components/Shopla'; // Import Shopla

const ShoplaPage = () => {
    return (
        <div>
            <Header />
            <main>
                <Shopla /> {/* Use Shopla component */}
            </main>
            <Footer />
        </div>
    );
};

export default ShoplaPage;
