const locations = [
  {
    name: 'Los Angeles',
    tag: 'DELIVERY + PICKUP',
    address: ['5067 W Washington Blvd', 'Los Angeles, CA 90016'],
    phone: '(323) 866-0572',
    tel: '+13238660572',
    email: 'labudzdeli@gmail.com',
    hours: '9:00 AM – 9:30 PM, every day',
    map: 'https://www.google.com/maps/search/?api=1&query=5067+W+Washington+Blvd+Los+Angeles+CA+90016'
  },
  {
    name: 'San Fernando Valley',
    tag: 'DELIVERY ONLY',
    address: ['16770 Stagg Street', 'Van Nuys, CA 91406'],
    phone: '(818) 717-7742',
    tel: '+18187177742',
    email: 'sfvbudzdeli@gmail.com',
    hours: '9:00 AM – 9:00 PM, every day',
    map: 'https://www.google.com/maps/search/?api=1&query=16770+Stagg+Street+Van+Nuys+CA+91406'
  }
];

export default function Contact() {
  return (
    <>
      <section className="page-hero"><div className="site-container page-hero__inner"><p className="eyebrow">WE’RE HERE TO HELP</p><h1>Let’s keep<br /><em>in touch.</em></h1><p>Need to ask about delivery, pickup or your neighborhood? You’ve come to the right place.</p></div></section>
      <section className="section contact-section"><div className="site-container"><div className="section-heading"><p className="eyebrow">REACH YOUR LOCAL TEAM</p><h2>Two locations.<br /><em>Always approachable.</em></h2></div>
        <div className="contact-grid">
          {locations.map((location, index) => (
            <article className="contact-tile" key={location.name}>
              <div className="contact-tile__top"><span>0{index + 1} / BUDZDELI</span><span>{location.tag}</span></div>
              <h3>{location.name}</h3>
              <div className="contact-tile__details">
                <div><span>ADDRESS</span><p>{location.address[0]}<br />{location.address[1]}</p></div>
                <div><span>PHONE</span><p><a href={'tel:' + location.tel}>{location.phone}</a></p></div>
                <div><span>EMAIL</span><p><a href={'mailto:' + location.email}>{location.email}</a></p></div>
                <div><span>HOURS</span><p>{location.hours}</p></div>
              </div>
              <a href={location.map} target="_blank" rel="noopener noreferrer" className="text-link">View on Google Maps <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <div className="contact-note"><span className="contact-note__icon" aria-hidden="true">✳</span><p>Delivery availability varies by address. Not sure which location serves you? Call the team and we’ll help point you in the right direction.</p></div>
      </div></section>
    </>
  );
}
