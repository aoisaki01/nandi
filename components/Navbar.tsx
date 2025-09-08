"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

// Data link untuk memudahkan mapping
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/#portfolio', scrollHref: '#portfolio' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const router = useRouter();
  const isHomepage = router.pathname === '/';
  
  // State untuk hamburger menu di mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Container utama yang 'floating' di atas */}
      <header className={`fixed inset-x-0 top-4 z-50 flex justify-center ${inter.className}`}>
        <div className="relative w-auto bg-black/40 backdrop-blur-lg ring-1 ring-white/10 rounded-full shadow-lg">
          <nav className="px-4 py-2 text-white">
            <div className="flex items-center">
              {/* Logo di paling kiri */}
              <Link href="/" className="font-bold text-lg hover:text-gray-300 transition-colors px-4 py-2">
                EQUIVA
              </Link>
              
              {/* Navigasi untuk Desktop (md ke atas) */}
              <div className="hidden md:flex items-center space-x-2 text-sm relative">
                {navLinks.map((link) => {
                  const href = ((link.name === 'Portfolio' && isHomepage) ? link.scrollHref : link.href) ?? '/';
                  const isActive = router.pathname === link.href.split('#')[0];

                  return (
                    // Gunakan Link dari Next.js untuk navigasi endpoint
                    <Link href={href} key={link.name} className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                      {isActive && (
                        // Efek 'pill' yang bergerak di belakang link aktif
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 bg-blue-500/30 -z-10 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Tombol Hamburger (di bawah md) */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
                  <motion.div
                    animate={isOpen ? "open" : "closed"}
                    className="w-6 h-6 flex flex-col justify-around"
                  >
                    <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }} className="block h-0.5 w-full bg-white"></motion.span>
                    <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="block h-0.5 w-full bg-white"></motion.span>
                    <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }} className="block h-0.5 w-full bg-white"></motion.span>
                  </motion.div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Menu Mobile (muncul saat hamburger di klik) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg ring-1 ring-white/10"
          >
            <div className="flex flex-col items-center space-y-2 p-4 text-white">
              {navLinks.map((link) => {
                  const href = ((link.name === 'Portfolio' && isHomepage) ? link.scrollHref : link.href) ?? '/';
                  return (
                    <Link href={href} key={link.name} className="w-full text-center py-3 rounded-lg hover:bg-white/10" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;