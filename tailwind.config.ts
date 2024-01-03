import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#DEF4FF",
        tertiary: "#88CBF5",
        quaternary: "#78A9D5",
        quinary: "#505D74",
        senary: "#222531",
      },
    },
  },
  plugins: [],
};
export default config;
