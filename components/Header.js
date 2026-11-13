import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our story' },
  { href: '/offers', label: 'Offers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="announcement">
        <div className="site-container announcement__inner">
          <span>Made for LA. Delivered with care.</span>
          <span><strong>Free delivery</strong> on orders over $50 <span aria-hidden="true">·</span> Adults 21+</span>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container site-header__inner">
          <Link href="/" className="brand" aria-label="BudzDeli home" onClick={() => setMenuOpen(false)}>
            <span className="brand__symbol" aria-hidden="true">B<span>.</span></span>
            <span className="brand__name">budz<span>deli</span><span className="brand__dot">.</span></span>
          </Link>
          <button
            type="button"
            className={menuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          <nav id="main-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
            <div className="site-nav__pages">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} className={router.pathname === href ? 'site-nav__link is-current' : 'site-nav__link'} aria-current={router.pathname === href ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>
              ))}
            </div>
            <div className="site-nav__actions">
              <Link className="site-nav__secondary" href="/shopsfv" onClick={() => setMenuOpen(false)}>Shop SFV <span aria-hidden="true">↗</span></Link>
              <Link className="button button--dark button--small" href="/shopla" onClick={() => setMenuOpen(false)}>Shop Los Angeles <span aria-hidden="true">↗</span></Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
