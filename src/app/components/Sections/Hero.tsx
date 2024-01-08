"use client";
import React from "react";
import { DecoderText } from "@/app/components/DecoderText";
import { IslandCanvas } from "@/app/components/Canvas";
import { styles } from "@/app/utils/styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 flex flew-row justify-start items-center px-48">
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
            {/* animation text placeholder  */}
          </div>
          <h2 className={`${styles.heroSubText} text-secondary`}>
            I&apos;m a high school student <br className="sm:block hidden" />
            who loves to craft and code.
          </h2>
        </div>
        <div className="relative flex-auto h-screen">
          <IslandCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
