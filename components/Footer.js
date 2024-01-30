function Footer() {
    return (
        <footer id="footer">
        <div className="container">
          <div className="row">
         
            <div className="col">
              <div className="la-info">
                <h1>BudzDeli - LA</h1>
                <p>
                  <i className="bi bi-geo-alt"></i> Delivery/Pickup<br />
                  5067 W Washington Blvd<br />
                  Los Angeles, CA 90016<br />
                  <i className="bi bi-telephone"></i><a href="tel:+13238660572">(323) 866-0572</a><br />
                </p>
    
              </div>
    
              <div className="sfv-info">
                <h1>BudzDeli - SFV</h1>
                <p>
                  <i className="bi bi-geo-alt"></i> Delivery Only<br />
                  16770 Stagg Street<br />
                  Van Nuys, CA 91406<br />
                  <i className="bi bi-telephone"></i><a href="tel:+18187177742">(818) 717-7742</a><br />
                </p>
    
              </div>
            </div>
    
        
            <div className="col quick-links">
              <h1>Quick Links</h1>
              <a href="/shopla">Shop LA</a>
              <a href="/shopsfv">Shop SFV</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>          
            </div>
    
          
            <div className="col">
              <p>Open 9AM-9:30PM, 7 days/week</p>
              <div className="social-links">
                <a href="https://www.instagram.com/budz_deli"><i className="bi bi-instagram"></i></a>
                <a href="mailto:labudzdeli@gmail.com"><i className="bx bx-envelope"></i></a>
              </div>
    
              <p>License: C10-0000513-LIC</p>
            </div>
          </div>

          <div>
            <div>
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
    );
}

export default Footer;
