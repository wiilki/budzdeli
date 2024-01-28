import React, { useEffect, useState } from 'react';
import './ShopSFV.css';

function ShopSFV() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Create script element and set its properties
        const script = document.createElement('script');
        script.src = 'https://labudzdeli.wm.store/static/js/embed.js';

        // Append the script to the body
        document.body.appendChild(script);

        // Trigger a rerender by updating the key state
        setKey(prevKey => prevKey + 1);

        // Clean up: remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs only once when component mounts

    return (
        <section key={key} id="shop-sfv" className="shop-sfv">
            <h1>SHOP SFV PAGE</h1>
        </section>
    );
}

export default ShopSFV;
