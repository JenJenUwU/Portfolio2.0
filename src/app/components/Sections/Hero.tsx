import React from "react";
import { DecoderText } from "../DecoderText";
import { styles } from "@/app/utils/styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <DecoderText
        text="Jay Lin"
        delay={300}
        className={`${styles.heroHeadText} text-quaternary`}
      />
    </section>
  );
};
export default Hero;
