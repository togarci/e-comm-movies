import '@/assets/styles/global.css';
import Header from '@/share/components/header';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="pt-BR" />
        <meta name="language" content="pt-BR" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        ></meta>

        <title>Teste Front React WeFit</title>
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
