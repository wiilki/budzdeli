import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer__main">
          <div className="footer__intro">
            <Link href="/" className="footer__brand">budz<span>deli</span>.</Link>
            <p>Local roots. Thoughtful service. Bringing convenience to neighborhoods across Los Angeles and the San Fernando Valley.</p>
            <span className="footer__pill">For adults 21+ only</span>
          </div>
          <div className="footer__column">
            <h2>Explore</h2>
            <Link href="/">Home</Link>
            <Link href="/about">Our story</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer__column">
            <h2>Find us</h2>
            <Link href="/shopla">Shop Los Angeles</Link>
            <Link href="/shopsfv">Shop San Fernando Valley</Link>
            <a href="https://www.google.com/maps/search/?api=1&query=5067+W+Washington+Blvd+Los+Angeles+CA+90016" target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            <a href="https://www.instagram.com/budz_deli/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          </div>
          <div className="footer__column footer__contact">
            <h2>Los Angeles</h2>
            <p>5067 W Washington Blvd<br />Los Angeles, CA 90016</p>
            <a href="tel:+13238660572">(323) 866-0572</a>
            <p className="footer__hours">9:00 AM – 9:30 PM · Daily</p>
          </div>
        </div>
        <div className="footer__legal">
          <p>Cannabis products are intended only for adults 21 and older. Keep out of reach of children. Do not drive under the influence. Consult your physician before use if you have a medical condition or take medications. Product availability and delivery eligibility vary by location. License: C10-0001057-LIC.</p>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} BudzDeli. All rights reserved.</span>
          <span>Los Angeles, California <span aria-hidden="true">✳</span> Locally rooted</span>
        </div>
      </div>
    </footer>
  );
}
