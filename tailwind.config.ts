import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0E1A",
        accent: "#2EE6D6",
        muted: "#94A3B8",
        surface: "#111628",
        foreground: "#F4F6FA",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        btn: "7px",
      },
      boxShadow: {
        glow: "0 0 24px rgba(46, 230, 214, 0.22)",
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
