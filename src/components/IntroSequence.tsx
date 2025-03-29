import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Rocket, Brain } from 'lucide-react';

const introTexts = [
  { text: "Welcome Future IITians!", icon: Brain },
  { text: "Ready for Paradox 2024?", icon: Rocket },
  { text: "The Ultimate Tech Fest Awaits!", icon: Sparkles }
];

export const IntroSequence = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < introTexts.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => setShowIntro(false), 2000);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (!showIntro) return null;

  const CurrentIcon = introTexts[currentIndex].icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <CurrentIcon className="w-16 h-16 text-cyan" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-orbitron text-white">
            {introTexts[currentIndex].text}
          </h1>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
