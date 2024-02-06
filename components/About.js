import Image from "next/image";

function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Come See LA&apos;s Large Selection Of Cannabis</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              BudzDeli has expanded, and we are absolutely thrilled to extend our delivery radius. Our location at 5067 W Washington Blvd, Los Angeles, is now complemented by a second at 16770 Stagg Street, Los Angeles, granting our friends and neighbors in the San Fernando Valley access to our rigorous standards of quality products and customer care.
              <br /><br />
              While our competitors focus on constructing brick-and-mortar storefronts, we prioritize reaching those who need us most. We recognize the challenges you may face in trying to reach us, from hectic schedules to medical issues. By removing these hurdles, we pave a smooth path to enhanced health, wellness, and the joy of life. Delivery from BudzDeli simply makes the benefits of cannabis even more accessible.
              <br /><br />
              For all orders over $50, we offer free delivery service. Pickup is also available at our Washington Blvd shop. Browse our two distinct menus online, create an account, and fill your cart with the most sought-after brands and your preferred strains. Discover an exciting collection of recreational and medicinal hybrids, sativas, indicas, and CBD products. Tailor your experience to your level, preferences, and needs with a wide selection of smokable flower, pre-rolls, edibles, beverages, concentrates, vape pens, topicals, tinctures, and accessories.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Image src="/img/about.jpeg" className="img-fluid" alt="about" width={845} height={505} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
