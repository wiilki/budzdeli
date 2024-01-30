function Header() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="/" className="nav-link"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="/shopla" className="nav-link"><i className="bx bx-cart"></i> <span>Shop LA</span></a></li>
                    <li><a href="/shopsfv" className="nav-link"><i className="bx bx-cart"></i> <span>Shop SFV</span></a></li>
                    <li><a href="/about" className="nav-link"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="/offers" className="nav-link"><i className="bx bx-user"></i> <span>Offers</span></a></li>
                    <li><a href="/contact" className="nav-link"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;