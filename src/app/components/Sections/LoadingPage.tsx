import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/utils/styles";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-quinary">
      <div className="size-40">
        <motion.img
          src="./icon.png"
          alt="Icon"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className={`${styles.heroHeadText} text-secondary`}>
        <p>Jay&apos;s Portfolio</p>
      </div>
    </div>
  );
};
export default LoadingPage;
