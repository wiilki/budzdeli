import Link from "next/link";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">

            <div className="col">
              <div className="la-info">
                <h1>BudzDeli - LA</h1>
                <p>
                  <i className="bi bi-geo-alt"></i> Delivery/Pickup<br />
                  <a href="https://www.google.com/maps/search/?api=1&query=5067+W+Washington+Blvd+Los+Angeles,+CA+90016" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} className="address">
                    5067 W Washington Blvd<br />
                    Los Angeles, CA 90016<br />
                  </a>

                  <i className="bi bi-telephone"></i><Link href="tel:+13238660572" className="phone-number">(323) 866-0572</Link><br />
                </p>

              </div>

              <div className="sfv-info">
                <h1>BudzDeli - SFV</h1>
                <p>
                  <i className="bi bi-geo-alt"></i> Delivery Only<br />
                  <a href="https://www.google.com/maps/search/?api=1&query=16770+Stagg+Street+Van+Nuys,+CA+91406" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} className="address">
                    16770 Stagg Street<br />
                    Van Nuys, CA 91406<br />
                  </a>
                  <i className="bi bi-telephone"></i><Link href="tel:+18187177742" className="phone-number">(818) 717-7742</Link><br />
                </p>

              </div>
            </div>


            <div className="col quick-links">
              <h1>Quick Links</h1>
              <Link href="/">Home</Link>
              <Link href="/shopla">Shop LA</Link>
              <Link href="/shopsfv">Shop SFV</Link>
              <Link href="/offers">Offers</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </div>


            <div className="col">
              <p>Open 9AM-9:30PM, 7 days/week</p>
              <div className="social-links">
                <Link href="https://www.instagram.com/budz_deli"><i className="bi bi-instagram"></i></Link>
                <Link href="mailto:labudzdeli@gmail.com"><i className="bx bx-envelope"></i></Link>
              </div>

              <p>License: C10-0000513-LIC</p>
            </div>
          </div>

          <div>
            <div className="disclaimer">
              <p>
                Disclaimer: This product is not for use by or sale to persons under the age of 21. Consult with a physician
                before use if you have a serious medical condition or use prescription medications. These statements have
                not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease.
                By using this site you agree to follow the Privacy Policy and all Terms & Conditions printed on this site.
              </p>
            </div>
          </div>


          <div>
            <div>
              <p>
                &copy; Copyright <strong>NexaTech Solutions LLC</strong>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>

      </footer>
      <Link href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
        className="bi bi-arrow-up-short"></i></Link>
    </>
  );
}

export default Footer;
