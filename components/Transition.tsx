import Image from 'next/image';

type TransitionProps = {
  animationClass: string;
  onAnimationEnd: () => void;
};

const Transition = ({ animationClass, onAnimationEnd }: TransitionProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#000014] z-[100] flex items-center justify-center ${animationClass}`}
      onAnimationEnd={onAnimationEnd} // Panggil fungsi saat animasi CSS selesai
    >
      <div className="relative w-48 h-48">
        <Image 
          src="/images/furina.png"
          alt="Transition Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Transition;