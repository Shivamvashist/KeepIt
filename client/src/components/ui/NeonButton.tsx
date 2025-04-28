import { motion } from 'framer-motion';

interface NeonButtonProps {
  text: string;
}

export function NeonButton({ text }: NeonButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: 30 }}
      className="relative overflow-hidden px-6 py-3 rounded-lg text-white font-semibold bg-transparent border-2 border-cyan-400 group"
    >
      {/* Glowing neon line */}
      <span className="absolute top-0 left-0 w-full h-full border-2 border-cyan-400 rounded-md opacity-30 group-hover:opacity-70 transition-opacity duration-300"></span>

      {/* Glowing underline */}
      <span className="bg-gradient-to-r from-pink-400 to-cyan-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,255,255,0.7)]"></span>

      {/* Main button text */}
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}