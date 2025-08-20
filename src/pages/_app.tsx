import type { Metadata } from 'next';
import Layout from '@/app/layout';

export const metadata: Metadata = {
  title: 'E-Comm Movies',
  description: 'An e-commerce platform for movies',
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
