import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Head><title>Contact Our Team | BudzDeli</title><meta name="description" content="Contact BudzDeli in Los Angeles or the San Fernando Valley. Find addresses, hours, phone numbers and email contacts." /></Head>
      <Header />
      <main id="main-content"><Contact /></main>
      <Footer />
    </>
  );
}
