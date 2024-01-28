import React from 'react';
import '../About/About.css';
import about from '../../assets/graphics/about.jpeg';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="display-4">Come See LA’s Large Selection Of Cannabis</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                            BudzDeli has expanded. We are absolutely thrilled to enlarge our delivery radius. Our location at 5067 W Washington Blvd Los Angeles is now joined by a second at 16770 Stagg Street, Los Angeles, opening up access to our strenuous standards of quality products and customer care to our friends and neighbors in the San Fran Valley.
                        </p>
                        <p>
                            While our competitors focus on building up brick-and-mortar storefronts, we are more concerned with reaching those who need us. We’ve seen how difficult it can be for you to come to us. From hectic schedules to medical issues, we eliminate the stumbling blocks and pave a smooth path to elevated health, wellness, and joy of life. Delivery from BudzDeli just makes the benefits of cannabis that much better.
                        </p>
                        <p>
                            For all orders over $50, our delivery service is free. We also include pick-up at our Washington Blvd shop. Check out our two unique menus online, create an account and fill up your cart with the most popular brands and your favorite strains. Explore an exciting collection of recreational and medicinal hybrids, sativa, indicas, and CBD. Suit your experience level, preferences, and purposes with a broad choice of smokable flower, pre-rolls, edibles, beverages, concentrates, vape pens, topicals, tinctures, and accessories.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <img src={about} alt="about" className="img-fluid rounded mx-auto d-block" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
