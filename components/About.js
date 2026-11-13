import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container page-hero__inner">
          <p className="eyebrow">THE PEOPLE BEHIND BUDZDELI</p>
          <h1>Rooted here.<br /><em>Made for you.</em></h1>
          <p>We’re a neighborhood-minded cannabis shop built around one simple idea: great service should be the easiest part of your day.</p>
        </div>
      </section>
      <section className="section story-section">
        <div className="site-container story-grid">
          <div className="story-grid__image"><Image src="/img/about.jpeg" alt="BudzDeli storefront and team" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="story-grid__copy"><p className="eyebrow">OUR STORY</p><h2>Local service.<br /><em>Real connection.</em></h2><p>BudzDeli started with a desire to make shopping easier for our Los Angeles neighbors. We’ve since grown to serve the San Fernando Valley too, without losing sight of what matters most: friendly service, an approachable experience, and reliable local options.</p><p>Our Los Angeles location offers both delivery and pickup. Our San Fernando Valley location brings delivery service to more neighborhoods.</p><Link href="/contact" className="text-link">Come say hello <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container"><div className="section-heading"><p className="eyebrow">WHAT MATTERS TO US</p><h2>Good service never<br /><em>goes out of style.</em></h2></div>
          <div className="values-grid">
            <div><span>01</span><h3>Neighborhood first</h3><p>We focus on the people and communities we serve, from central LA to the Valley.</p></div>
            <div><span>02</span><h3>Easy by design</h3><p>Delivery and pickup options help make the experience fit your schedule.</p></div>
            <div><span>03</span><h3>Room to explore</h3><p>Different selections at each location mean more ways to find what works for you.</p></div>
          </div>
        </div>
      </section>
      <section className="closing-section"><div className="site-container closing-section__inner"><div><p className="eyebrow eyebrow--light">STAY LOCAL</p><h2>Find your<br /><em>BudzDeli.</em></h2></div><div><p>Explore both service areas or reach out to the team.</p><Link href="/contact" className="button button--light">Contact us <span aria-hidden="true">↗</span></Link></div></div></section>
    </>
  );
}
