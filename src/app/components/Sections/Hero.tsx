"use client";
import React from "react";
import { DecoderText } from "@/app/components/DecoderText";
import { IslandCanvas } from "@/app/components/Canvas";
import { styles } from "@/app/utils/styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.heroPadding} absolute inset-0 flex xl:flex-row flex-col items-center`}
      >
        <div className="flex-shrink-0">
          <h1 className={`${styles.heroIntroText} text-quaternary`}>
            Hi, my name is
          </h1>
          <DecoderText
            text="Jay Lin"
            delay={300}
            className={`${styles.heroHeadText} text-primary absolute flex-shrink-0`}
          />
          <div className={`${styles.heroHeadText} invisible flex-shrink-0`}>
            あああああああ
          </div>
          <h3 className={`${styles.heroSubText} text-secondary flex-shrink-0`}>
            I&apos;m a high school student <br className="sm:block hidden" />
            who loves to craft and code.
          </h3>
        </div>
        <div className="flex-auto h-full">
          <IslandCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
