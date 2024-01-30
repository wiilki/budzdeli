import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Products</h2>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Flowers</h4>
                <div className="portfolio-links">
                  <a href="/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Edibles</h4>
                <div className="portfolio-links">
                  <a href="/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
              <img src="/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Concentrates</h4>
                <div className="portfolio-links">
                  <a href="/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
