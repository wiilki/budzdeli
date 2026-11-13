import Head from 'next/head';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#183a30" />
        <link rel="icon" href="/img/favicon.png" />
        <meta name="description" content="BudzDeli serves Los Angeles and the San Fernando Valley with convenient cannabis delivery and Los Angeles pickup. For adults 21+." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
