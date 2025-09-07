"use client";
import Link from 'next/link';
import { useRouter } from 'next/router'; // 
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  const router = useRouter();
  const isHomepage = router.pathname === '/'; 

  return (
    <header className={`fixed top-0 z-50 w-full ${inter.className}`}>
      <div className="w-full bg-black/30 backdrop-blur-lg border-b border-gray-800/50">
        <nav className="max-w-full-xl mx-auto px-8 py-4 text-white">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-xl hover:text-gray-300 transition-colors">
              EQUIVALENT
            </Link>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <Link href="/" className={`transition-colors duration-300 ${isHomepage ? "text-white" : "text-gray-400 hover:text-white"}`}>
                Home
              </Link>
              
              {isHomepage ? (
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              ) : (
                <Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              )}

              <Link href="/about" className={`transition-colors duration-300 ${router.pathname === "/about" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                About
              </Link>
             
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;