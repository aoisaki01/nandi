import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Transition from '../../components/Transition';
import Navbar from '../../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleStart = (url: string) => {
      // Hanya jalankan transisi jika pindah ke endpoint baru
      if (router.pathname !== url.split('#')[0]) {
        setAnimationClass('animate-wipe-in');
        setTransitioning(true);
      }
    };

    const handleComplete = () => {
      // Setelah halaman baru dimuat, mulai animasi keluar
      setAnimationClass('animate-wipe-out');
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  // Fungsi ini akan dipanggil saat animasi keluar selesai
  const handleAnimationEnd = () => {
    if (animationClass === 'animate-wipe-out') {
      setTransitioning(false);
    }
  };

  return (
    <div className="bg-black">
      <Navbar />
      
      {transitioning && (
        <Transition 
          animationClass={animationClass}
          onAnimationEnd={handleAnimationEnd}
        />
      )}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;