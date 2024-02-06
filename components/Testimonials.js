import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SwiperCore from 'swiper';
import { Pagination } from 'pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination]);

function Testimonials() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>
        <div className='testimonials-main'>
          <Swiper
            className="testimonials-slider"
            data-aos="fade-up"
            data-aos-delay="400"
            pagination={{
              clickable: true,
            }}
            autoHeight={true} // Enable autoHeight feature
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <h3>Vince</h3>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  I always get the best service from BD. That&apos;s why I buy from them. I get what&apos;s described. Service is
                  as fast as it gets. You have to consider Rush hour traffic etc but it&apos;s always been delivery time I&apos;m
                  satisfied with. The answer questions and that gives me confidence in my choices when placing an order.
                  If you haven&apos;t already used BD for your buds then do it now. You will be satisfied. Prices are top
                  notch. You can&apos;t go wrong.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <h3>Ashley</h3>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  My first experience with Budz was great! Delivery was much quicker than others and they seem to have
                  the best variety of stuff. I couldn’t be happier
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <h3>Gabriel</h3>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  I love ordering from this shop! It’s super easy to order and everyone is so friendly!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <h3>Stephanie</h3>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Best place in LA always friendly people working.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <h3>Billy</h3>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Incredible customer service. Efficient communication. Friendly and professional dispatch, drivers and
                  management. Budz Deli is running a tight operation and it shows in how they handle their biz.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>


          <div className="review-button-container">
            <a href="https://weedmaps.com/deliveries/budz-deli-18#reviews" target="_blank" className="review-button">
              <i className='bx bx-edit'></i>
              LEAVE A REVIEW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
