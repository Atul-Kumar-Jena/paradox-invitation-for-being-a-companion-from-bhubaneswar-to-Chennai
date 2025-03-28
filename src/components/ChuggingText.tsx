import { motion } from 'framer-motion';
import useSound from 'use-sound';

export const ChuggingText = () => {
  const [playWhistle] = useSound('/train-whistle.mp3', { volume: 0.5 });

  return (
    <motion.div
      className="font-orbitron text-4xl md:text-6xl text-white tracking-wider text-center"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onHoverStart={() => playWhistle()}
    >
      <h1 className="animate-float">
        Bhubaneswar → Chennai Central Mail
      </h1>
      <motion.p 
        className="text-cyan text-xl md:text-2xl mt-2 animate-glow font-space"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Calling all Bhubaneswariyas & Future IITians!
      </motion.p>
      <p className="text-cyan text-2xl md:text-3xl mt-4 animate-glow font-space">
        Departure: 8 PM | Arrival: 4 AM
      </p>
    </motion.div>
  );
};