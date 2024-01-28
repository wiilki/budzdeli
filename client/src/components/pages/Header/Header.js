import React from 'react';
import Navigation from '../Navigation/Navigation';
import "../Navigation/Navigation.css";
import headingLogo from '../../assets/graphics/headingLogo.png'

function Header({ currentPage, handlePageChange }) {
    return (
        <nav id="navbar" className="navbar nav-menu">
            <div className="navtitle">
                <img src={headingLogo} alt="heading-logo" className="img-fluid" />
            </div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
    );
}

export default Header;