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
        maroon: {
          DEFAULT: "#7F1D1D",
          light: "#9B2335",
          dark: "#5C1515",
          50: "#FFF0F0",
          100: "#FFD6D6",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C84A",
          dark: "#B8961F",
          pale: "#F5E6A3",
        },
        ivory: "#FFF8E7",
        cream: "#F8F5F0",
        charcoal: "#2B2B2B",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        serif: ["Palatino Linotype", "Book Antiqua", "Palatino", "serif"],
        sans: ["Gill Sans", "Optima", "Segoe UI", "sans-serif"],
        tamil: ["Noto Serif Tamil", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(90deg, #D4AF37 0%, #F5E6A3 40%, #E8C84A 60%, #D4AF37 100%)",
        "silk-pattern":
          "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(212,175,55,0.05) 2px, rgba(212,175,55,0.05) 4px)",
      },
      boxShadow: {
        gold: "0 4px 24px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 8px 48px rgba(212, 175, 55, 0.4)",
        maroon: "0 4px 24px rgba(127, 29, 29, 0.3)",
        luxury: "0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(212,175,55,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
