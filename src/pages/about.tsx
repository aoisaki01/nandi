"use client"; 
import Image from 'next/image';
import { Poppins, Inter } from 'next/font/google';
import { useState, useEffect } from 'react'; 

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className={`bg-black transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <section id="about" className="w-full min-h-screen text-white flex items-center py-20">
        <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl shadow-blue-500/20">
            <Image
              src="/images/furina.jpg"
              alt="Foto Tentang Saya"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${poppins.className}`}>
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className={`text-gray-400 leading-relaxed ${inter.className}`}>
A versatile and skilled creative professional hailing from Banjarmasin, Muhammad Nandi Habibi possesses a comprehensive mastery of the digital production workflow. He is highly proficient with industry-standard editing software, including Adobe After Effects, Premiere Pro, Photoshop, and Illustrator, consistently delivering high-quality visual content. Uniquely combining his creative talents with technical acumen, Nandi is also experienced in server operations and management. He is a collaborative team player, valued for his ability to work effectively with others to achieve shared goals and project success            </p>
            <p className={`mt-4 text-gray-400 leading-relaxed ${inter.className}`}>
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};


export default AboutPage;
