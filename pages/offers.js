import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/Offers';

export default function OffersPage() {
  return (
    <>
      <Head><title>Offers | BudzDeli</title><meta name="description" content="Learn about BudzDeli delivery offers and contact our local teams for current specials. Adults 21+." /></Head>
      <Header />
      <main id="main-content"><Offers /></main>
      <Footer />
    </>
  );
}
