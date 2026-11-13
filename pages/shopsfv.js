import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShopSanFernandoValley() {
  return (
    <>
      <Head><title>Shop San Fernando Valley | BudzDeli</title><meta name="description" content="BudzDeli San Fernando Valley shopping page." /></Head>
      <Header />
      <main id="main-content" className="shop-blank" aria-label="San Fernando Valley shop" />
      <Footer />
    </>
  );
}
