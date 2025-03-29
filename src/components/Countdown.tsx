import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const PARADOX_START = dayjs('2025-06-04 09:00:00');
const DAY_ZERO = dayjs('2025-06-03 09:00:00');

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isParadoxStarted, setIsParadoxStarted] = useState(false);
  const [targetDate, setTargetDate] = useState(DAY_ZERO);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const currentTarget = now.isBefore(DAY_ZERO) ? DAY_ZERO : PARADOX_START;
      
      if (currentTarget !== targetDate) {
        setTargetDate(currentTarget);
      }

      const diff = currentTarget.diff(now, 'second');

      if (diff <= 0) {
        if (!isParadoxStarted && currentTarget === PARADOX_START) {
          setIsParadoxStarted(true);
          confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
          });
        } else if (currentTarget === DAY_ZERO) {
          setTargetDate(PARADOX_START);
        }
        return;
      }

      const days = Math.floor(diff / (24 * 60 * 60));
      const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      const seconds = diff % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [isParadoxStarted, targetDate]);

  return (
    <motion.div 
      className="bg-midnight/80 backdrop-blur-sm rounded-xl p-6 mt-8 relative z-30"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-xl md:text-2xl font-orbitron text-center mb-4 text-cyan">
        {isParadoxStarted ? "Paradox 2025 is Live! 🎉" : 
         dayjs().isBefore(DAY_ZERO) ? "Countdown to Day Zero" : "Paradox Begins In"}
      </h2>
      <div className="flex gap-4 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div 
            key={unit} 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="bg-rail/20 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] relative overflow-hidden"
              whileHover={{ 
                backgroundColor: "rgba(255, 107, 53, 0.3)",
                boxShadow: "0 0 15px rgba(255, 107, 53, 0.4)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-rail/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'linear',
                }}
              />
              <span className="font-orbitron text-2xl md:text-4xl text-white relative z-10">
                {String(value).padStart(2, '0')}
              </span>
            </motion.div>
            <span className="text-xs md:text-sm mt-2 font-space text-white/70 capitalize">
              {unit}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
