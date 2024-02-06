import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="highlighted-container">
          <div className="highlighted-text">

          Providing a <span className="emphasis">huge variety</span> of products available for <span className="emphasis">delivery</span>!
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {/* Portfolio Item 1 */}
          <div className="col-lg-4 col-md-12 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-inner">
                <Image src="/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="portfolio1" width={416} height={600} />
              </div>
              <div className="portfolio-info">
                <h4>Shop Flowers</h4>
                <Image src="/img/whitelogo.png" className="img-fluid" alt="whitelogo" width={300} height={77} />
              </div>
              <div className="shop-buttons portfolio-shop-buttons">
                <Link href="/shopla" className="shop-button">Shop LA</Link>
                <Link href="/shopsfv" className="shop-button">Shop SFV</Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="col-lg-4 col-md-12 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-inner">
                <Image src="/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="portfolio2" width={416} height={600} />
              </div>
              <div className="portfolio-info">
                <h4>Shop Edibles</h4>
                <Image src="/img/whitelogo.png" className="img-fluid" alt="whitelogo" width={300} height={77} />
              </div>
              <div className="shop-buttons portfolio-shop-buttons">
                <Link href="/shopla" className="shop-button">Shop LA</Link>
                <Link href="/shopsfv" className="shop-button">Shop SFV</Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="col-lg-4 col-md-12 portfolio-item">
            <div className="portfolio-wrap">
              <div className="portfolio-inner">
                <Image src="/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="portfolio3" width={416} height={600} />
              </div>
              <div className="portfolio-info">
                <h4>Shop Concentrates</h4>
                <Image src="/img/whitelogo.png" className="img-fluid" alt="whitelogo" width={300} height={77} />
              </div>
              <div className="shop-buttons portfolio-shop-buttons">
                <Link href="/shopla" className="shop-button">Shop LA</Link>
                <Link href="/shopsfv" className="shop-button">Shop SFV</Link>
              </div>
            </div>
          </div>

          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
