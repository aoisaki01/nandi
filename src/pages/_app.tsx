import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Transition from '../../components/Transition';
import Navbar from '../../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(false);
    };

    const handleStart = (url: string) => {
      if (router.pathname !== url.split('#')[0]) {
        setIsTransitioning(true);
      }
    };
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router]);

  return (
    <div className="bg-black">
      <Navbar />
      
      <AnimatePresence mode="wait">
        {isTransitioning && <Transition />}
      </AnimatePresence>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;