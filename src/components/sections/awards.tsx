import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Awards = () => {
  return (
    <div className="flex justify-center pt-12 md:pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
      >
        <Link href="https://www.designrush.com/">
          <Image
            src="/images/awards/design-rush.png"
            alt="DesignRush"
            width={145}
            height={145}
            className="rounded-lg hover:scale-110 transition-all duration-200"
          />
        </Link>
      </motion.div>
    </div>
  );
};
