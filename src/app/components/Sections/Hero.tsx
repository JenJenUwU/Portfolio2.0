import React from "react";
import { DecoderText } from "@/app/components/DecoderText";
import { IslandCanvas } from "@/app/components/canvas";
import { styles } from "@/app/utils/styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 gap-5 flex flew-row justify-start items-center px-40`}
      >
        <div className="relative">
          <h1 className={`${styles.heroIntroText} text-quaternary`}>
            Hi, my name is
          </h1>
          <DecoderText
            text="Jay Lin"
            delay={300}
            className={`${styles.heroHeadText} text-primary`}
          />
          <h2 className={`${styles.heroSubText} text text-secondary`}>
            I'm a high school student <br className="sm:block hidden" />
            who loves to craft and code.
          </h2>
        </div>
        <div className="flex-auto h-full">
          <IslandCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
