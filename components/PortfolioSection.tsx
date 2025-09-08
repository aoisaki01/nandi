import VideoCard from './VideoCard';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
};

const PortfolioSection = ({ videos }: { videos: Video[] }) => {
  return (
    // Pastikan TIDAK ADA `bg-black` di baris <section> ini.
    <section
      id="portfolio"
      className={`relative w-full min-h-screen text-white flex items-center py-24 overflow-hidden ${inter.className}`}
    >
      {/* Komponen Image sebagai background */}
      <Image
        src="/images/blue.jpg"
        alt="Portfolio Background"
        fill
        className="object-cover -z-20"
      />
      {/* Overlay gelap di atas image, BUKAN di section */}
      <div className="absolute inset-0 bg-black/60 -z-10" /> 
      
      {/* Konten utama */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                My <span className="text-blue-400">Portfolio</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                A collection of my recent video editing and motion graphic works.
            </p>
            <div className="mt-6 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {videos.map((video, index) => (
            <div
              key={video.id}
              style={{ 
                marginTop: index % 2 !== 0 ? '4rem' : '0',
              }}
            >
                <VideoCard
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;