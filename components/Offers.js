import Image from "next/image";
import promoImage from "../public/img/promo.png"; // Ensure the correct path

function Offers() {
    return (
        <section id="offers" className="offers">
            <div className="section-title">
                <h2>Offers</h2>
                <div className="image-container animated-image">
                    <Image
                        src={promoImage}
                        alt="Promo"
                        width={800} 
                        height={600} 
                        layout="responsive" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Offers;
