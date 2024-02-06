import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services'
import Testimonials from './Testimonials'
import Locations from './Locations';
import OffersBanner from './OffersBanner';

function Home() {
    return (
        <main>
            <Hero />
            <div className='home-main'>
                <Locations />
                <OffersBanner />
                <Portfolio />
                <Services />
                <Testimonials />
            </div>
        </main>
    );
}

export default Home;
