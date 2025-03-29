import { motion } from 'framer-motion';

const avatars = [
  { id: 1, image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100", name: "Atul" },
  { id: 2, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", name: "Ashutosh" },
  { id: 3, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100", name: "Kanha" },
  { id: 4, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100", name: "Tushar" },
  { id: 5, image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100", name: "Krishna" }
];

export const UserAvatars = () => {
  return (
    <motion.div 
      className="flex flex-col items-center mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white font-orbitron text-lg mb-4">Join Your Fellow Travelers</h3>
      <div className="flex -space-x-4">
        {avatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            className="relative group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img
              src={avatar.image}
              alt={avatar.name}
              className="w-12 h-12 rounded-full border-2 border-cyan"
            />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan/80 font-space opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-midnight/90 px-2 py-1 rounded">
              {avatar.name}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="w-12 h-12 rounded-full bg-rail/80 flex items-center justify-center border-2 border-cyan cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white font-space text-sm">20+</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
