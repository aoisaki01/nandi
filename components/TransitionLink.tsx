import { motion } from 'framer-motion';
import Image from 'next/image';

const Transition = () => {
  const transitionVariants = {
    initial: {
      clipPath: 'circle(0% at 0% 100%)',
    },
    animate: {
      clipPath: 'circle(150% at 0% 100%)',
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
    exit: {
      clipPath: 'circle(0% at 0% 100%)',
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 },
    },
  } as const; 

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-[#000016] z-[100] flex items-center justify-center"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative w-48 h-48">
        <Image 
          src="/images/furina.png"
          alt="Transition Image"
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Transition;