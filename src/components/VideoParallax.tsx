import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface VideoParallaxProps {
  videoUrl: string;
}

export const VideoParallax = ({ videoUrl }: VideoParallaxProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-midnight/60 z-10" />
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </motion.div>
  );
};