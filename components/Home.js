import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { title: 'Flower', note: 'The classics, thoughtfully selected.', image: '/img/portfolio/portfolio-1.jpg', number: '01' },
  { title: 'Edibles', note: 'A little something for every preference.', image: '/img/portfolio/portfolio-2.jpg', number: '02' },
  { title: 'Concentrates', note: 'Explore more ways to enjoy.', image: '/img/portfolio/portfolio-3.jpg', number: '03' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" /> YOUR NEIGHBORHOOD CANNABIS DELIVERY</p>
            <h1>Good things,<br /><em>closer to home.</em></h1>
            <p className="hero__lead">The quality you want. The convenience you deserve. BudzDeli makes finding your favorites feel effortless across Los Angeles and the Valley.</p>
            <div className="hero__actions">
              <a href="#locations" className="button button--dark">Find your location <span aria-hidden="true">↗</span></a>
              <Link href="/about" className="text-link">Get to know us <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="hero__footnote"><span className="hero__footnote-mark" aria-hidden="true">✳</span><span>Proudly local since day one.<br />Two neighborhoods, one easy experience.</span></div>
          </div>
          <div className="hero__visual">
            <div className="hero__photo" role="img" aria-label="BudzDeli lifestyle photography">
              <div className="hero__photo-label">THE BUDZDELI WAY <span>EST. LOS ANGELES</span></div>
            </div>
            <div className="hero__sticker"><span>LA<br />LOCAL</span><span className="hero__sticker-star" aria-hidden="true">✳</span></div>
          </div>
        </div>
      </section>

      <section className="benefits" aria-label="What makes BudzDeli convenient">
        <div className="site-container benefits__grid">
          <div><span className="benefits__icon" aria-hidden="true">✳</span><span>Locally focused<br /><small>LA & San Fernando Valley</small></span></div>
          <div><span className="benefits__icon" aria-hidden="true">↗</span><span>Convenient delivery<br /><small>Free on orders over $50</small></span></div>
          <div><span className="benefits__icon" aria-hidden="true">⌁</span><span>Pickup available<br /><small>At our Los Angeles shop</small></span></div>
        </div>
      </section>

      <section className="section locations-section" id="locations">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow">01 / FIND YOUR SPOT</p><h2>Two neighborhoods.<br /><em>One good connection.</em></h2></div>
            <p>Whether you’re closer to the city or the Valley, choose the BudzDeli location that works for you.</p>
          </div>
          <div className="location-grid">
            <article className="location-tile location-tile--la">
              <div className="location-tile__top"><span>01 / LOS ANGELES</span><span className="location-tile__status">Delivery + pickup</span></div>
              <div className="location-tile__content"><p className="location-tile__small">THE ORIGINAL</p><h3>Los<br />Angeles<span>.</span></h3><p>5067 W Washington Blvd<br />Los Angeles, CA 90016</p><Link href="/shopla" className="button button--light">Shop LA <span aria-hidden="true">↗</span></Link></div>
              <span className="location-tile__decoration" aria-hidden="true">LA</span>
            </article>
            <article className="location-tile location-tile--sfv">
              <div className="location-tile__top"><span>02 / SAN FERNANDO VALLEY</span><span className="location-tile__status">Delivery only</span></div>
              <div className="location-tile__content"><p className="location-tile__small">A LITTLE CLOSER</p><h3>The<br />Valley<span>.</span></h3><p>Serving the San Fernando Valley<br />from 16770 Stagg Street</p><Link href="/shopsfv" className="button button--dark">Shop SFV <span aria-hidden="true">↗</span></Link></div>
              <span className="location-tile__decoration" aria-hidden="true">SFV</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow">02 / EXPLORE</p><h2>A little bit of<br /><em>everything good.</em></h2></div>
            <p>Explore familiar favorites and discover something new. Product selections may vary between our two locations.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.title}>
                <div className="category-card__image"><Image src={category.image} alt={category.title + ' selection'} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div>
                <div className="category-card__body"><span>{category.number} / COLLECTION</span><h3>{category.title}</h3><p>{category.note}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="site-container experience__grid">
          <div className="experience__intro"><p className="eyebrow eyebrow--light">03 / THE BUDZDELI EXPERIENCE</p><h2>Less hassle.<br /><em>More ease.</em></h2><p>We believe a great neighborhood shop should fit into your day, not the other way around.</p><Link href="/about" className="text-link text-link--light">More about BudzDeli <span aria-hidden="true">↗</span></Link></div>
          <div className="experience__steps">
            <div><span>01</span><div><h3>Choose your location</h3><p>Select Los Angeles or San Fernando Valley to find the right service area.</p></div></div>
            <div><span>02</span><div><h3>Browse at your pace</h3><p>Explore the selection that suits you, wherever your day takes you.</p></div></div>
            <div><span>03</span><div><h3>Delivery or pickup</h3><p>We offer local delivery, plus pickup at our Los Angeles location.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="site-container quote-section__inner"><p className="eyebrow">KIND WORDS FROM OUR COMMUNITY</p><div className="quote-section__mark" aria-hidden="true">“</div><blockquote>My first experience with Budz was great! Delivery was much quicker than others and they seem to have the best variety of stuff.</blockquote><p className="quote-section__credit">— Ashley, BudzDeli customer</p><a href="https://weedmaps.com/deliveries/budz-deli-18#reviews" target="_blank" rel="noopener noreferrer" className="text-link">Read community reviews <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="closing-section">
        <div className="site-container closing-section__inner"><div><p className="eyebrow eyebrow--light">YOUR GOOD NEIGHBOR</p><h2>Here when<br /><em>you need us.</em></h2></div><div><p>Questions about locations, hours or availability? We’d love to hear from you.</p><Link href="/contact" className="button button--light">Get in touch <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </>
  );
}
