import React from "react";
import { Hero } from "./components/Sections";
import { About } from "./components/Sections";

const App = () => {
  return (
    <main className="overflow-x-hidden z-0 bg-senary">
      <Hero />
      <About />
    </main>
  );
};
export default App;
