import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Sparkles, Train, Info } from 'lucide-react';

export const ParadoxInfo = () => {
  return (
    <motion.div
      className="bg-midnight/90 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto relative z-30"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron text-cyan">Paradox 2024</h2>
        <Sparkles className="w-8 h-8 text-rail animate-pulse" />
      </motion.div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 hover:bg-cyan/5 p-2 rounded-lg transition-colors">
          <Calendar className="w-6 h-6 text-cyan" />
          <div>
            <p className="text-white font-space">June 4-8, 2024</p>
            <p className="text-cyan/70 text-sm">5 Days of Innovation at IIT Madras</p>
          </div>
        </div>

        <div className="flex items-center gap-4 hover:bg-cyan/5 p-2 rounded-lg transition-colors">
          <Train className="w-6 h-6 text-cyan" />
          <div>
            <p className="text-white font-space">Journey Details</p>
            <p className="text-cyan/70 text-sm">20-hour Epic Train Adventure</p>
          </div>
        </div>

        <div className="flex items-center gap-4 hover:bg-cyan/5 p-2 rounded-lg transition-colors">
          <MapPin className="w-6 h-6 text-cyan" />
          <div>
            <p className="text-white font-space">Route Highlights</p>
            <p className="text-cyan/70 text-sm">Bhubaneswar → Chennai Central</p>
          </div>
        </div>

        <div className="flex items-center gap-4 hover:bg-cyan/5 p-2 rounded-lg transition-colors">
          <Users className="w-6 h-6 text-cyan" />
          <div>
            <p className="text-white font-space">Squad Size</p>
            <p className="text-cyan/70 text-sm">Join 20+ fellow tech enthusiasts</p>
          </div>
        </div>

        <div className="flex items-center gap-4 hover:bg-cyan/5 p-2 rounded-lg transition-colors">
          <Info className="w-6 h-6 text-cyan" />
          <div>
            <p className="text-white font-space">Important Note</p>
            <p className="text-cyan/70 text-sm">Click the info icon below for journey details</p>
          </div>
        </div>

        <motion.div 
          className="mt-8 bg-cyan/5 p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-orbitron text-white mb-4">What to Expect</h3>
          <ul className="space-y-2 text-cyan/80 font-space">
            <li className="flex items-center gap-2">
              <span className="text-cyan">•</span>
              Network with fellow tech enthusiasts
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan">•</span>
              Share ideas and build connections
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan">•</span>
              Experience the magic of train travel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan">•</span>
              Arrive energized for Paradox 2024
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};