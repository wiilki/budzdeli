// components/Shopla.js
import React from 'react';

function Shopla() {
    // Script as a string
    const scriptString = `<script src="https://labudzdeli.wm.store/static/js/embed.js"></script>`;

    return (
        <section id="shopla" className="shopla">
            <h1>Shopla PAGE</h1>
            {/* Inserting the script exactly here */}
            <div dangerouslySetInnerHTML={{ __html: scriptString }} />
        </section>
    );
}

export default Shopla;
