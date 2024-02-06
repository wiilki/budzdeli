function Contact() {
    return (
        <section id="contact" className="contact container my-5">
            <div className="section-title">
                <h2>Contact Information</h2>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-4 contact-card-wrapper">
                    <div className="contact-card">
                        <h5>BudzDeli LA</h5>
                        <p>
                            5067 W Washington Blvd<br />
                            Los Angeles, CA 90016<br />
                            <a href="tel:+13238660572">(323) 866-0572</a><br />
                            <a href="mailto:labudzdeli@gmail.com">labudzdeli@gmail.com</a><br />
                            Open 9AM-9:30PM, 7 days/week
                        </p>
                    </div>
                </div>

                <div className="col-md-4 contact-card-wrapper">
                    <div className="contact-card">
                        <h5>BudzDeli SFV (Delivery Only)</h5>
                        <p>
                            16770 Stagg Street<br />
                            Los Angeles, CA 91406<br />
                            <a href="tel:+18187177742">(818) 717-7742</a><br />
                            <a href="mailto:sfvbudzdeli@gmail.com">sfvbudzdeli@gmail.com</a><br />
                            Open 9AM-9PM, 7 days/week
                        </p>
                    </div>
                </div>

                <div className="col-md-4 contact-card-wrapper">
                    <div className="contact-card">
                        <h5>Royal Greens Dispensary</h5>
                        <p>
                            5067 W Washington Blvd<br />
                            Los Angeles, CA 90016<br />
                            <a href="tel:+13232973224">(323) 297-3224</a><br />
                            <a href="mailto:royalgreensla@gmail.com">royalgreensla@gmail.com</a><br />
                            Open 9AM-9:30PM, 7 days/week
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;
