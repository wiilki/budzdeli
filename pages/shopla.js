import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const ShoplaPage = () => {
  return (
    <div>
      <Head>
        <title>Shop LA | BudzDeli</title>
        <meta name="description" content="Dependable Weed Delivery" />
      </Head>
      <Header />
      <main>
        <iframe src="/shopla.html" style={{ width: '100%', height: '1000px', border: 'none' }}></iframe>
      </main>
      <Footer />
    </div>
  );
};

export default ShoplaPage;
