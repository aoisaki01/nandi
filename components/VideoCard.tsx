import Image from 'next/image';

type VideoCardProps = {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoCard = ({ title, thumbnailUrl, videoUrl }: VideoCardProps) => {
  return (
    <a 
      href={videoUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group" 
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l8.315-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
        </div>
      </div>
      
      <h3 className="mt-4 text-base font-medium text-gray-300 group-hover:text-white transition-colors">
        {title}
      </h3>
    </a>
  );
};

export default VideoCard;