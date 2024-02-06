import Image from "next/image";
import Link from "next/link";

function OffersBanner() {
    return (
        <section className="offers-banner-container">
            <div className="offers-banner">
                <div className="left-offers">
                    <div className="left-content">
                        <h2>Your Dependable Cannabis Delivery Shop</h2>
                        <p>
                            BudzDeli is your convenience access to an extensive selection and
                            exceptional quality cannabis. We recognize the demands on your time.
                            Finding the opportunity to focus on self-care, wellness, and
                            happiness can be a challenge. Our professional services simplify
                            your shopping. We deliver.
                        </p>
                        <h2>Proudly serving the greater Los Angeles areas</h2>
                        <button className="offers-banner-button btn btn-custom btn-black-bg">
                            <Link href="/offers" className="hero-shop-button">Special Offers</Link>
                        </button>
                    </div>
                </div>
                <div className="right-offers">
                    
                </div>
            </div>
        </section>
    );
}

export default OffersBanner;
