import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    useEffect(() => {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach((e) => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };

        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            let navbarlinks = select('#navbar .scrollto', true);
            navbarlinks.forEach((navbarlink) => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            });
        };

        const scrollto = (el) => {
            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos,
                behavior: 'smooth',
            });
        };

        const toggleBacktotop = () => {
            let backtotop = select('.back-to-top');
            if (backtotop) {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                } else {
                    backtotop.classList.remove('active');
                }
            }
        };

        const closeMobileNav = () => {
            let body = select('body');
            let navbarToggle = select('.mobile-nav-toggle');
            if (body.classList.contains('mobile-nav-active')) {
                body.classList.remove('mobile-nav-active');
                navbarToggle.classList.toggle('bi-list');
                navbarToggle.classList.toggle('bi-x');
            }
        };

        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);

        let backtotop = select('.back-to-top');
        if (backtotop) {
            window.addEventListener('load', toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }

        on('click', '.mobile-nav-toggle', function (e) {
            select('body').classList.toggle('mobile-nav-active');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });

        on('click', '.scrollto', function (e) {
            if (select(this.hash)) {
                e.preventDefault();
                let body = select('body');
                if (body.classList.contains('mobile-nav-active')) {
                    body.classList.remove('mobile-nav-active');
                    let navbarToggle = select('.mobile-nav-toggle');
                    navbarToggle.classList.toggle('bi-list');
                    navbarToggle.classList.toggle('bi-x');
                }
                scrollto(this.hash);
            }
        }, true);

        window.addEventListener('load', () => {
            if (window.location.hash) {
                if (select(window.location.hash)) {
                    scrollto(window.location.hash);
                }
            }
        });

        // Close mobile nav on route change
        router.events.on('routeChangeStart', closeMobileNav);

        return () => {
            // Clean up event listeners if necessary
            window.removeEventListener('load', navbarlinksActive);
            onscroll(document, navbarlinksActive);

            if (backtotop) {
                window.removeEventListener('load', toggleBacktotop);
                onscroll(document, toggleBacktotop);
            }

            // Remove route change listener on unmount
            router.events.off('routeChangeStart', closeMobileNav);
        };
    }, [router]); // Run the effect when the router changes

    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><Link href="/" className="nav-link"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                        <li><Link href="/shopla" className="nav-link"><i className="bi bi-bag"></i> <span>Shop LA</span></Link></li>
                        <li><Link href="/shopsfv" className="nav-link"><i className="bi bi-cart"></i> <span>Shop SFV</span></Link></li>
                        <li><Link href="/about" className="nav-link"><i className="bx bx-user"></i> <span>About</span></Link></li>
                        <li><Link href="/offers" className="nav-link"><i className="bx bx-star"></i> <span>Offers</span></Link></li>
                        <li><Link href="/contact" className="nav-link"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
