import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/layout';
import { NextPageCustomLayout } from '@/types/_app.type';
import AppProvider from '@/components/providers/app-provider';
import enableSmoothScroll from '../components/enableSmoothScroll';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import imageFavicon from '../../public/img/smglogo.png';

enableSmoothScroll();

const App = ({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageCustomLayout;
}) => {
  const getLayout =
    Component.getLayout ?? ((page: any) => <Layout>{page}</Layout>);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Sarana Mulya Grafika | SMG</title>
        <meta name="keywords" key="keywords" content="Sarana mulya grafika" />
        <link rel="icon" href="/smglogo.png" sizes="any" />
      </Head>
      <div>
        <AppProvider initialLoading={false}>
          {getLayout(<Component {...pageProps} />)}
        </AppProvider>
      </div>
    </>
  );
};

export default App;
