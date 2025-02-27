import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Awards = () => {
  return (
    <div className="flex justify-center pt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <Link href="https://www.designrush.com/">
          <Image
            src="/images/awards/design-rush.png"
            alt="DesignRush"
            width={145}
            height={145}
            className="rounded-lg"
          />
        </Link>
      </motion.div>
    </div>
  );
};
