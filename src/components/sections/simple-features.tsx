"use client";

import { Asterisk } from "lucide-react";
import { motion } from "framer-motion";

const SIMPLE_FEATURES = [
  "Web Development",
  "Logo & Branding",
  "SEO Optimization",
  "E-commerce",
  "Custom Solutions",
];

export const SimpleFeaturesBanner = () => {
  return (
    <motion.div className="w-full overflow-hidden bg-[#1601ac] text-white py-8 flex whitespace-nowrap">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {SIMPLE_FEATURES.concat(SIMPLE_FEATURES).map((feature, index) => (
          <div key={index} className="flex items-center gap-2 py-[-12px]">
            <h2 className="text-5xl font-extrabold">{feature}</h2>
            <Asterisk
              strokeWidth={3}
              strokeLinecap="square"
              size={72}
              className="text-[#e3ff04]"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
