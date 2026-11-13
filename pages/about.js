import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Head><title>Our Story | BudzDeli</title><meta name="description" content="Get to know BudzDeli, a neighborhood-focused cannabis delivery service serving Los Angeles and San Fernando Valley. Adults 21+." /></Head>
      <Header />
      <main id="main-content"><About /></main>
      <Footer />
    </>
  );
}
