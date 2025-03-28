import { motion } from 'framer-motion';
import { Train, Users, Calendar, Clock } from 'lucide-react';

export const TrainTicket = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-midnight/90 to-midnight/70 backdrop-blur-sm 
                 rounded-xl p-6 max-w-md w-full mx-auto mt-8 border border-cyan/20"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-orbitron text-xl text-white">Student Special</h3>
          <p className="text-cyan/80 font-space text-sm mt-1">Chennai Express</p>
        </div>
        <Train className="text-rail w-8 h-8" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="text-cyan w-5 h-5" />
          <div>
            <p className="text-white/70 text-sm font-space">Squad Size</p>
            <p className="text-white font-orbitron">20+ Students</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="text-cyan w-5 h-5" />
          <div>
            <p className="text-white/70 text-sm font-space">Journey Date</p>
            <p className="text-white font-orbitron">April 1, 2024</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="text-cyan w-5 h-5" />
          <div>
            <p className="text-white/70 text-sm font-space">Duration</p>
            <p className="text-white font-orbitron">20 Hours</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-cyan/20">
        <p className="text-white/90 font-space text-sm">
          From the City of Temples to the Home of IIT Madras - An Epic Railway Journey!
        </p>
      </div>
    </motion.div>
  );
};