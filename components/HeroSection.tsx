"use client";

import Image from 'next/image';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

// Komponen ReactPlayer tidak lagi diimpor atau digunakan di sini

const HeroSection = () => {
  // Semua logic state dan effect untuk 3D scroll juga sudah dihapus
  return (
    // Kontainer utama sekarang hanya setinggi layar, tanpa background sendiri
    <main className="relative w-full h-screen">
      {/* KODE BACKGROUND VIDEO DAN WRAPPERNYA DIHAPUS DARI SINI */}

      <div className="relative z-10 h-full flex flex-col">
        {/* Navbar sudah ada di _app.tsx, jadi baris ini bisa dihapus jika duplikat */}
        {/* <Navbar /> */} 
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h1 className={`text-6xl lg:text-8xl font-semibold tracking-tight ${poppins.className}`}>
                <div className="flex items-center justify-center md:justify-start hover:scale-101 duration-200">
                  <h2 className='text-blue-200 bg-blend-difference opacity-50'>EQUIVA</h2>LENT
                </div>
              </h1>
              <p className={`text-lg lg:text-xl text-gray-200 mt-2 ${inter.className}`}>
                MUHAMMAD NANDI HABIBI
              </p>
              <p className={`text-sm tracking-widest text-gray-400 mt-4 uppercase ${inter.className}`}>
                video editor | motion graphic designer | content creator
              </p>
              <a href="mailto:nandihabibie@gmail.com" className="inline-block mt-6 px-8 py-3 border border-gray-300 rounded-lg text-gray-200 text-base font-medium text-center hover:border-blue-300 transition-colors">
                Contact Me
              </a>
            </div>
            <div className="relative w-48 h-48 lg:w-60 lg:h-96 flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Image
                src="/images/furina.jpg" alt="Foto Profil" fill
                style={{ objectFit: 'contain' }}
                className="drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;