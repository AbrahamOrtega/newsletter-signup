import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Primary
        tomato: "#FF6257",
        strawberry: "#ff5476",

        // Neutral
        darkSlateGrey: "#242742",
        charcoalGrey: "#36384E",
        grey: "#9294A0"
      },
    },
  },
  plugins: [],
} satisfies Config;
