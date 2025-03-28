import { motion } from 'framer-motion';

const stations = [
  { name: 'Bhubaneswar', time: '20:00' },
  { name: 'Brahmapur', time: '22:30' },
  { name: 'Vizianagaram', time: '01:15' },
  { name: 'Vijayawada', time: '06:45' },
  { name: 'Chennai Central', time: '16:00' }
];

export const RouteMap = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-orbitron text-cyan text-center mb-16">Journey Route</h2>
      
      <div className="relative">
        {/* Track */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-cyan/20 transform -translate-y-1/2 rounded-full" />
        
        {/* Glowing Track Animation */}
        <motion.div
          className="absolute top-1/2 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent transform -translate-y-1/2"
          animate={{
            x: ['-100%', '400%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Stations */}
        <div className="relative flex justify-between items-center min-h-[160px] md:min-h-[120px]">
          {stations.map((station, index) => (
            <motion.div
              key={station.name}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="w-3 h-3 bg-rail rounded-full relative"
                whileHover={{ scale: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-rail/50 rounded-full"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
              
              <div className="absolute w-24 text-center">
                <div className="mt-6 transform -rotate-45 md:rotate-0 md:mt-8">
                  <p className="text-white text-xs md:text-sm font-space whitespace-nowrap">
                    {station.name}
                  </p>
                  <p className="text-cyan/70 text-xs font-space">
                    {station.time}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p 
        className="text-center text-cyan/70 font-space text-sm mt-24 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        20 Hours • 5 Stations • Countless Memories
      </motion.p>
    </div>
  );
};
