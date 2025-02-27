"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-md",
            scrollProgress > 90 && "bottom-[135px]"
          )}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22"
              cy="22"
              r="16"
              stroke="white"
              strokeWidth="4"
              fill="none"
              opacity="0.3"
            />
            <circle
              cx="22"
              cy="22"
              r="16"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeDasharray="113.097"
              strokeDashoffset={113.097 - (113.097 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-75"
            />
          </svg>
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
