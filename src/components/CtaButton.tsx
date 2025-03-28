import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Train } from 'lucide-react';

interface CtaButtonProps {
  formUrl: string;
}

export const CtaButton = ({ formUrl }: CtaButtonProps) => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    setTimeout(() => {
      window.location.href = formUrl;
    }, 1000);
  };

  return (
    <motion.button
      className="bg-rail text-white px-8 py-4 rounded-full font-space text-xl 
                flex items-center gap-2 animate-pulse-slow hover:bg-rail/90 
                transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <Train className="w-6 h-6" />
      Join Squad
    </motion.button>
  );
};