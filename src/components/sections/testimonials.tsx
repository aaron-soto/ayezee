"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { motion } from "framer-motion";
import { useState } from "react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "next" | "prev"
  >("next");

  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? prev : prev + 1
    );
  };

  const handlePrev = () => {
    setTransitionDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.075,
      },
    },
  };

  return (
    <div className="bg-[#e3ff04]">
      <div className="container py-32 flex gap-8">
        <motion.div
          className="flex flex-1 flex-col relative max-w-3xl"
          key={activeIndex}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-extrabold text-5xl mb-8 ">Testimonials</h2>
          <Quote
            size={62}
            className="absolute text-transparent fill-blue-500/10 top-10"
          />
          <Quote
            size={62}
            className="absolute text-transparent fill-blue-500/10 bottom-14 right-6"
          />
          <motion.p variants={textVariants} className="mb-6 text-lg">
            {TESTIMONIALS[activeIndex].text}
          </motion.p>

          <motion.h2 variants={textVariants} className="text-2xl font-bold">
            {TESTIMONIALS[activeIndex].name}
          </motion.h2>
          <motion.p variants={textVariants} className="text-lg">
            - {TESTIMONIALS[activeIndex].company}
          </motion.p>

          <div className="flex gap-4 mt-3">
            <button
              disabled={activeIndex === 0}
              onClick={handlePrev}
              className="border-[3px] border-black p-2 rounded-full disabled:opacity-20 transition-all duration-200 group"
            >
              <ChevronLeft
                size={24}
                className="-translate-x-0.5 group-hover:scale-125 transition-all duration-200"
              />
            </button>
            <button
              disabled={activeIndex === TESTIMONIALS.length - 1}
              onClick={handleNext}
              className="border-[3px] border-black p-2 rounded-full disabled:opacity-20 transition-all duration-200 group"
            >
              <ChevronRight
                size={24}
                className="translate-x-0.5 group-hover:scale-125 transition-all duration-200"
              />
            </button>
          </div>
        </motion.div>
        <div className="hidden flex-1 md:block relative w-full max-w-2xl h-[450px] -mt-56">
          <Image
            src="/images/office.JPG"
            alt="office"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
