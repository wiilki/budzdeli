import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShopLosAngeles() {
  return (
    <>
      <Head><title>Shop Los Angeles | BudzDeli</title><meta name="description" content="BudzDeli Los Angeles shopping page." /></Head>
      <Header />
      <main id="main-content" className="shop-blank" aria-label="Los Angeles shop" />
      <Footer />
    </>
  );
}
