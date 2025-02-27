import { Triangle } from "lucide-react";
import { motion } from "motion/react";

export const Video = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20, scale: 0.9 }}
      animate={{ opacity: 1, translateY: 0, scale: 1 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-secondary w-full h-auto max-w-5xl aspect-video mt-20 my-48 relative mx-auto"
    >
      <div className="inset-0 absolute bg-black/30 flex justify-center items-center group cursor-pointer">
        <div className="p-5 rounded-full transition-all duration-200 bg-[#2520c5]">
          <Triangle
            size={32}
            fill="#e3ff04"
            className="text-[#e3ff04] translate-x-0.5 rotate-90"
          />
        </div>
      </div>
    </motion.div>
  );
};
