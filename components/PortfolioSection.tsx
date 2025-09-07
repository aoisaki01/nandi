import VideoCard from './VideoCard';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
};

const PortfolioSection = ({ videos }: { videos: Video[] }) => {
  return (
    <section
      id="portfolio"
      className={`relative w-full min-h-screen text-white flex items-center py-20 ${inter.className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#000]" />
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url('/images/grain.avif')" }} />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight">
          <span className="text-blue-400">Equals</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex justify-center items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-full max-w-md">
                <VideoCard
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
