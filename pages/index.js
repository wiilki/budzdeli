import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

export default function HomePage() {
  return (
    <>
      <Head><title>BudzDeli | Los Angeles Cannabis Delivery & Pickup</title><meta name="description" content="Local cannabis delivery in Los Angeles and the San Fernando Valley, plus LA pickup. Explore BudzDeli's neighborhoods, offers and service options. Adults 21+." /></Head>
      <Header />
      <main id="main-content"><Home /></main>
      <Footer />
    </>
  );
}
