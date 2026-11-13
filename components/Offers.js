import Link from 'next/link';

export default function Offers() {
  return (
    <>
      <section className="page-hero"><div className="site-container page-hero__inner"><p className="eyebrow">GOOD THINGS TO KNOW</p><h1>A little extra<br /><em>goes a long way.</em></h1><p>Explore current service perks, and check with your BudzDeli location for the latest offers and availability.</p></div></section>
      <section className="section offers-section"><div className="site-container"><div className="offer-grid">
        <article className="offer-card offer-card--dark"><span className="offer-card__eyebrow">EVERYDAY CONVENIENCE / 01</span><div className="offer-card__center"><span className="offer-card__symbol" aria-hidden="true">✳</span><h2>Free delivery<br /><em>over $50.</em></h2><p>Spend more than $50 and enjoy delivery at no additional delivery charge, where available.</p></div><Link href="/contact" className="button button--light">Ask about delivery <span aria-hidden="true">↗</span></Link></article>
        <article className="offer-card offer-card--light"><span className="offer-card__eyebrow">NEW TO BUDZDELI? / 02</span><div className="offer-card__center"><span className="offer-card__symbol" aria-hidden="true">↗</span><h2>First visit?<br /><em>Say hello.</em></h2><p>Ask our team about any first-time customer offers currently available for your location.</p></div><Link href="/contact" className="button button--outline">Contact the team <span aria-hidden="true">↗</span></Link></article>
      </div><p className="offers-note">Offers and delivery eligibility may vary by service area and are subject to change. Please contact BudzDeli to confirm current terms and restrictions.</p></div></section>
      <section className="closing-section"><div className="site-container closing-section__inner"><div><p className="eyebrow eyebrow--light">HERE TO HELP</p><h2>Questions?<br /><em>We’ve got you.</em></h2></div><div><p>Reach out to your local team for the latest details.</p><Link href="/contact" className="button button--light">Get in touch <span aria-hidden="true">↗</span></Link></div></div></section>
    </>
  );
}
