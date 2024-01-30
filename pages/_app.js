import React, { useEffect } from 'react';
import Head from 'next/head';
import 'aos/dist/aos.css'; // AOS
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons
import 'boxicons/css/boxicons.css'; // Boxicons
import 'glightbox/dist/css/glightbox.css'; // GLightbox
import 'swiper/swiper-bundle.css'; // Swiper
import '../styles/global.css'; // Your global CSS

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window !== "undefined") {
      import('../utils/global.js');
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Your description" />
        <meta name="keywords" content="Your, keywords" />
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
