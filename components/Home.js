import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services'
import Testimonials from './Testimonials'

function Home() {
    return (
        <main>
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        </main>
    );
}

export default Home;
