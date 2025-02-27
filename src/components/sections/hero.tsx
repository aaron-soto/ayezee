import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#ced4da_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>
      <div className="container relative max-w-4xl text-center py-16 md:py-32">
        <motion.h1
          initial={{
            scale: 0.8,
            opacity: 0,
            translateY: 20,
          }}
          viewport={{ once: true }}
          animate={{ scale: 1, opacity: 1, translateY: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-[74px] font-bold leading-tight"
        >
          Your website should work as hard as you do
        </motion.h1>
        <motion.p
          initial={{
            scale: 0.8,
            opacity: 0,
            translateY: 20,
          }}
          viewport={{ once: true }}
          animate={{ scale: 1, opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg mt-8 text-foreground"
        >
          You built your business from the ground up. Your website should
          reflect that same level of dedication. At AyeZee Web Designs, we
          create high-performance, professional websites that help businesses
          grow—without the fluff, gimmicks, or unnecessary complexity.
        </motion.p>
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
            translateY: 20,
          }}
          viewport={{ once: true }}
          animate={{ scale: 1, opacity: 1, translateY: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Button className="rounded-none px-8 py-6 text-lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
