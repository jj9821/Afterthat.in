import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ff2020",
          black: "#080808",
          charcoal: "#121212",
          card: "#111111",
          hover: "#181818",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
