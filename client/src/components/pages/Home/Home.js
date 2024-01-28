import React from 'react';
import logo from '../../assets/graphics/logo.png';
import wmLogo from '../../assets/graphics/wm.png';
import whiteLogo from '../../assets/graphics/whitelogo.png';
import img1 from '../../assets/graphics/img1.jpg';
import './Home.css';

const Home = ({ handlePageChange }) => {
    return (
        <div className="home-container">
            <div className="banner">
                <img src={logo} alt="Logo" className="logo" />
                <h1>FREE DELIVERY ON ORDERS OVER $50</h1>
                <h2>High-quality cannabis delivery</h2>
                <img src={wmLogo} alt="WM Logo" className="wm-logo" />
                <div className="shop-buttons">
                    <button 
                        className="btn btn-custom" 
                        onClick={() => handlePageChange('ShopLA')}>
                        SHOP LA
                    </button>
                    <button 
                        className="btn btn-custom" 
                        onClick={() => handlePageChange('ShopSFV')}>
                        SHOP SF VALLEY
                    </button>
                </div>
            </div>

            <div className="main-container">
                <div className="location-cards">
                    <div className="location-card location-card-first">
                        <h3>Los Angeles Delivery</h3>
                        <img src={whiteLogo} alt="White Logo" className="store-logo" />
                        <p>Budz Deli</p>
                        <p>(323) 866-0572</p>
                        <button 
                            className="btn btn-custom"
                            onClick={() => handlePageChange('ShopLA')}>
                            ORDER HERE
                        </button>
                    </div>
                    <div className="location-card location-card-second">
                        <h3>San Fernando Valley Delivery</h3>
                        <img src={whiteLogo} alt="White Logo" className="store-logo" />
                        <p>Budz Deli SFV</p>
                        <p>(818) 717-7742</p>
                        <button 
                            className="btn btn-custom"
                            onClick={() => handlePageChange('ShopSFV')}>
                            ORDER HERE
                        </button>
                    </div>
                </div>
                <div className="offers-container">
                    <div className="offers">
                        <div className="left-offers">
                            <h2>Your Dependable Cannabis Delivery Shop</h2>
                            <p>
                                BudzDeli is your convenience access to an extensive selection and
                                exceptional quality cannabis. We recognize the demands on your time.
                                Finding the opportunity to focus on self-care, wellness, and
                                happiness can be a challenge. Our professional services simplify
                                your shopping. We deliver.
                            </p>
                            <h2>Proudly serving the greater Los Angeles areas</h2>
                            <button 
                                className="btn btn-custom btn-black-bg" 
                                onClick={() => handlePageChange('ShopLA')}>
                                SPECIAL OFFERS
                            </button>
                        </div>
                        <div className="right-offers">
                            <img src={img1} alt="Image 1" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <div className="category-card category-card-flower">
                        <h2>Shop Flower</h2>
                        <div className="category-buttons">
                            <button 
                                className="btn btn-custom"
                                onClick={() => handlePageChange('ShopLA')}>
                                SHOP LA
                            </button>
                            <button 
                                className="btn btn-custom"
                                onClick={() => handlePageChange('ShopSFV')}>
                                SHOP SFV
                            </button>
                        </div>
                        <img src={whiteLogo} alt="White Logo" className="store-logo" />
                    </div>
                    <div className="category-card category-card-edible">
                        <h2>Shop Edibles</h2>
                        <div className="category-buttons">
                            <button 
                                className="btn btn-custom"
                                onClick={() => handlePageChange('ShopLA')}>
                                SHOP LA
                            </button>
                            <button 
                                className="btn btn-custom"
                                onClick={() => handlePageChange('ShopSFV')}>
                                SHOP SFV
                            </button>
                        </div>
                        <img src={whiteLogo} alt="White Logo" className="store-logo" />
                    </div>
                    <div className="category-card category-card-accessory">
                        <h2>Shop Accessories</h2>
                        <div className="category-buttons">
                            <button 
                                className="btn btn-custom"
                                onClick={() => handlePageChange('ShopLA')}>
                                SHOP LA
                            </button>
                            <button 
                                className="btn btn-custom"
                                onClick={() => handlePageChange('ShopSFV')}>
                                SHOP SFV
                            </button>
                        </div>
                        <img src={whiteLogo} alt="White Logo" className="store-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
