import Image from 'next/image';
import Navbar from '../../components/Navbar'; // Diubah dari ../../components
import { Poppins, Inter } from 'next/font/google';
import PortfolioSection from '../../components/PortfolioSection'; // Diubah dari ../../components

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
});

// Komponen ReactPlayer dihapus dari sini

interface HomeProps {
  videos: Array<{
    id: string;
    title: string;
    thumbnailUrl: string;
    videoUrl: string;
  }>;
}

export default function Home({ videos }: HomeProps) {
  return (
    <div>
      <main className="relative w-full h-screen overflow-hidden bg-black">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute w-[300%] h-[300%] -top-[100%] -left-[100%] filter blur-sm">
            
            {/* --- PERUBAHAN UTAMA DI SINI --- */}
            {/* Mengganti ReactPlayer dengan tag <video> statis */}
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* --- AKHIR DARI PERUBAHAN --- */}

          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <Navbar />

          <div className="flex-grow flex items-center justify-center p-8">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between ">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h1 className={`text-6xl lg:text-8xl font-semibold tracking-tight ${poppins.className}`}>
                  <div className="flex items-center justify-center md:justify-start hover:scale-101 duration-200">
                    <h2 className='text-blue-200 bg-blend-difference opacity-50'>EQUIVA</h2>LENT
                  </div>
                </h1>
                <p className={`text-lg lg:text-xl text-gray-200 mt-2 ${inter.className}`}>
                  MUHAMMAD NANDI HABIBIE
                </p>
                <p className={`text-sm tracking-widest text-gray-400 mt-4 uppercase ${inter.className}`}>
                  video editor | motion graphic designer | content creator
                </p>
                <p className={`text-sm tracking-widest text-gray-400 mt-4 uppercase ${inter.className}`}>
                  #partofpasifixc  
                </p>
                <a
                  href="mailto:nandihabibie@gmail.com"
                  className="inline-block mt-6 px-8 py-3 border border-gray-300 rounded-lg text-gray-200 text-base font-medium text-center hover:border-blue-300 transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="relative w-48 h-48 lg:w-60 lg:h-96 flex-shrink-0">
                <Image
                  src="/images/furina.jpg"
                  alt="Foto Profil"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <PortfolioSection videos={videos} />
    </div>
  );
}

// FUNGSI getStaticProps Anda tetap sama persis
export async function getStaticProps() {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = 'PLxholx9QaiMQs30FSPlIB014uL8cYrDUI';
  const maxResults = 50;
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`;

  console.log('Requesting URL:', API_URL);

  type YoutubePlaylistItem = {
    snippet: {
      title: string;
      thumbnails: {
        maxres?: { url: string };
        high?: { url: string };
        default?: { url: string };
      };
      resourceId: {
        videoId: string;
      };
    };
  };

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (data.error || !data.items) {
      console.error('API Response:', data);
      throw new Error('Failed to fetch playlist items. Check API key, Playlist ID, or API Response log.');
    }

    const videos = (data.items as YoutubePlaylistItem[]).map((item) => {
      const { snippet } = item;
      const { title, thumbnails, resourceId } = snippet;
      return {
        id: resourceId.videoId,
        title: title,
        thumbnailUrl: thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.default?.url,
        videoUrl: `https://www.youtube.com/watch?v=${resourceId.videoId}`
      };
    });

    return {
      props: {
        videos,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return { props: { videos: [] } };
  }
}