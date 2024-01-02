"use client";
import React from "react";
import { Hero } from "./components/Sections";

const Home = () => {
  return (
    <main className="overflow-x-hidden relative z-0 mx-auto">
      <section className="h-screen">
        <p className="text-4xl md:text-[200px] md:leading-relaxed">
          Scroll down
        </p>
      </section>
      <Hero />
    </main>
  );
};
export default Home;
