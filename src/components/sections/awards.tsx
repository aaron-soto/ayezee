import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Awards = () => {
  return (
    <div className="flex justify-center pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hover:scale-110 transition-all duration-200"
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
