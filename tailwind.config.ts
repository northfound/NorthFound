import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        nf: {
          charcoal: "#141414",
          ivory: "#F8F5EF",
          white: "#FCFBF8",
          brass: "#B28B47",
          forest: "#4F6650",
          slate: "#5F5B56",
          line: "rgba(20,20,20,.12)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        nfSoft: "0 18px 70px rgba(20,20,20,.08)",
        nfFloating: "0 34px 120px rgba(20,20,20,.16)"
      },
      borderRadius: {
        nf: "32px",
        nfLarge: "48px"
      }
    }
  },
  plugins: []
};

export default config;
