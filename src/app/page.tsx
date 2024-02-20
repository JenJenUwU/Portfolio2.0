"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero, Footer, LoadingPage } from "./components/Sections";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <main className="overflow-x-hidden z-0 bg-senary">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute z-10 h-full w-full"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: "-100vh" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <LoadingPage />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={isLoading ? "hidden" : ""}>
        <Hero />
        <Footer />
      </div>
    </main>
  );
};
export default App;
