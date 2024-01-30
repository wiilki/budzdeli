import Link from 'next/link';

function Header() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><Link href="/" className="nav-link"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                    <li><Link href="/shopla" className="nav-link"><i className="bx bx-cart"></i> <span>Shop LA</span></Link></li>
                    <li><Link href="/shopsfv" className="nav-link"><i className="bx bx-cart"></i> <span>Shop SFV</span></Link></li>
                    <li><Link href="/about" className="nav-link"><i className="bx bx-user"></i> <span>About</span></Link></li>
                    <li><Link href="/offers" className="nav-link"><i className="bx bx-user"></i> <span>Offers</span></Link></li>
                    <li><Link href="/contact" className="nav-link"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;