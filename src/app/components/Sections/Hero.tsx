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
        <div className="relative">
          <h1 className={`${styles.heroIntroText} text-quaternary`}>
            Hi, my name is
          </h1>
          <DecoderText
            text="Jay Lin"
            delay={300}
            className={`${styles.heroHeadText} text-primary absolute`}
          />
          <div className={`${styles.heroHeadText} invisible`}>
            あああああああ
          </div>
          <h3 className={`${styles.heroSubText} text-secondary`}>
            I&apos;m a high school student <br className="sm:block hidden" />
            who loves to craft and code.
          </h3>
        </div>
        <div className="relative flex-auto h-full max-xl:w-full">
          <IslandCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
