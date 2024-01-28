import React, { useEffect } from 'react';
import './ShopLA.css';

function ShopLA() {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://labudzdeli.wm.store/static/js/embed.js';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        return () => {
            // Remove the script from the document body on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="shop-la" className="shop-la">
            <h1>SHOP LA PAGE</h1>
            <div id="embed-container">
            <iframe 
                    src="https://labudzdeli.wm.store/discover" 
                    title="Shop LA Website" 
                    width="100%" 
                    height="600px" 
                    style={{border: "none"}}
                >
                    {/* Fallback content for browsers that don't support iframes */}
                    <p>Your browser does not support iframes.</p>
                </iframe>
            </div>
        </section>
    );
}

export default ShopLA;
