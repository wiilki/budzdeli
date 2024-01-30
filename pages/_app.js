import Head from 'next/head';
import 'aos/dist/aos.css'; // AOS
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons
import 'boxicons/css/boxicons.css'; // Boxicons
import 'glightbox/dist/css/glightbox.css'; // GLightbox
import 'swiper/swiper-bundle.css'; // Swiper
import '../styles/global.css'; // Your global CSS

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Your description" />
        <meta name="keywords" content="Your, keywords" />
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        {/* Add other head elements here if needed */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
