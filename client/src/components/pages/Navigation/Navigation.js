import React, { useState } from 'react';

function Navigation({ currentPage, handlePageChange }) {
  // State to manage the toggle state of the collapse component
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleNavLinkClick = (page) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    // Then handle the page change logic
    handlePageChange(page);
    // Collapse the navbar
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarToggleExternalContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('Home');
              }}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              <i className="bx bx-home"></i> <span>HOME</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/shopla" // Use the correct URL for ShopLA
              className={currentPage === 'ShopLA' ? 'nav-link active' : 'nav-link'}
            >
              <i className="bx bx-envelope"></i> <span>SHOP LA</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/shopsfv" // Use the correct URL for ShopSFV
              className={currentPage === 'ShopSFV' ? 'nav-link active' : 'nav-link'}
            >
              <i className="bx bx-envelope"></i> <span>SHOP SFV</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('About');
              }}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              <i className="bx bx-user"></i> <span>ABOUT</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('Contact');
              }}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              <i className="bx bx-envelope"></i> <span>CONTACT</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
