import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const TextAbout = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between py-24 bg-[#e3ff04]">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        className="w-full h-[300px] relative md:h-[600px] -mt-[20%]"
      >
        <Image
          src="/images/about.jpg"
          alt="office"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="w-full mt-6 md:mt-0 md:max-w-lg mx-16">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, translateX: 20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold leading-tight mb-4"
        >
          Unlock Revenue Growth for Your Business
        </motion.h2>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, translateX: 20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-lg"
        >
          Veteran-owned and operated, we bring a mission-first mindset to web
          development. That means clear communication, efficient execution, and
          results that speak for themselves. Whether you need a simple site to
          establish your online presence or a fully custom web solution, we
          build with purpose.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: 20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 text-lg"
        >
          Let&apos;s work together and get you the software that your business
          needs to succeed and go to the next level!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, translateX: 20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button asChild className="rounded-none px-8 py-6 text-lg">
            <Link href="/about">More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
