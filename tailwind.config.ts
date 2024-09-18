import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme"; // Use ES module import
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  darkMode: "class", // Enables dark mode with a class strategy
  plugins: [nextui()], 
};
export default config;
