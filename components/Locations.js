import Link from 'next/link';
import Image from 'next/image';

function Locations() {
    return (
        <section id="locations" className="locations">
            <div className="location-cards">
                <div className="location-card location-card-first">
                    <h3>Los Angeles</h3>
                    <Image src="/img/whitelogo.png" alt="White Logo" className="store-logo" width={300} height={77}/>
                    <p>BudzDeli LA</p>
                   <a href="tel:+13238660572">(323) 866-0572</a>
                    <Link href="/shopla" className="hero-shop-button">Order Here</Link>
                </div>
                <div className="location-card location-card-second">
                    <h3>San Fernando Valley</h3>
                    <Image src="/img/whitelogo.png" alt="White Logo" className="store-logo" width={300} height={77}/>
                    <p>BudzDeli SFV</p>
                    <a href="tel:+18187177742">(818) 717-7742</a>
                    <Link href="/shopsfv" className="hero-shop-button">Order Here</Link>
                </div>
            </div>
        </section>
    );
}

export default Locations;
