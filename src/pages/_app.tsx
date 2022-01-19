import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
