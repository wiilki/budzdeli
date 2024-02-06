// pages/_app.js
import React from 'react';
import Head from 'next/head';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.css';
import 'glightbox/dist/css/glightbox.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Import required modules
import { Pagination, Autoplay } from 'swiper';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="description" content="Your description" />
        <meta name="keywords" content="Your, keywords" />
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Other head elements */}
      </Head>
        <Component {...pageProps} />
            </>
  );
}

export default MyApp;
