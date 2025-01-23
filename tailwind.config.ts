import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cormorant-unicase": ["Cormorant Unicase", "serif"],
        "cormorant-infant": ["Cormorant Infant", "serif"],
        "bruno-ace": ["Bruno Ace", "sans-serif"],
        "bruno-ace-sc": ["Bruno Ace SC", "sans-serif"],
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
        "arty-signature": ["Arty Signature", "cursive"],
        federo: ["Federo", "sans-serif"],
        satista: ["Satista", "sans-serif"],
        metrophobic: ["Metrophobic", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
        satisfy: ["Satisfy", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "rotate-infinite": "infiniteRotate 6s linear infinite",
        "fade-in": "fadeIn 1s ease-in-out",
        bounce: "bounce 2s infinite",
        pulsate: "pulsate 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        infiniteRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359.9deg)" },
        },
        
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #A85B5B 0.2%, #422424 110.29%)",
        "header-gradient":
          "linear-gradient(2deg, rgba(0, 0, 0, 0.80) -1.69%, rgba(7, 7, 7, 0.30) 47.67%, rgba(255, 255, 255, 0.00) 111.88%)",
        "header-dark-gradient":
          "linear-gradient(2deg, rgba(0, 0, 0, 0.80) -1.69%, rgba(7, 7, 7, 0.30) 47.67%, rgba(255, 255, 255, 0.00) 111.88%)",
        "location-section-gradient":
          "linear-gradient(180deg, #000 4.94%, rgba(2, 2, 2, 0.50) 60.55%, #666 100%);",
        "location-top-box-gradient":
          "linear-gradient(180deg, #A85B5B 0.2%, rgba(111, 60, 60, 0.72) 54.36%, rgba(66, 36, 36, 0.50) 110.29%);",
        "book-reservation": "rgba(119, 119, 119, 0.06);",
        "book-reservation-gradient":
          "linear-gradient(180deg, #A85B5B 0.2%, #422424 110.29%)",
        "about-euphoria-learn-more-gradient":
          "linear-gradient(180deg, #A85B5B 0.2%, #422424 110.29%)",
        "other-businesses-gradient":
          "linear-gradient(0deg, #000 7.22%, rgba(244, 244, 244, 0.00) 40.98%)",
        "download-menu-gradient":
          "linear-gradient(180deg, #A85B5B 0.2%, #422424 110.29%)",
        "view-menu-button-gradient":
          "linear-gradient(179.77deg, #A85B5B 0.2%, #422424 110.29%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
