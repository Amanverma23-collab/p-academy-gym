/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0a",
          card: "#121212",
          cardHover: "#181818",
          charcoal: "#1f1f1f",
          lightGrey: "#f4f4f5",
          muted: "#8e8e93",
          green: "#10b981",
          greenHover: "#059669",
          greenLight: "rgba(16, 185, 129, 0.1)",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Satoshi", "Clash Display", "sans-serif"],
        editorial: ["Clash Display", "Satoshi", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        glow: "0 0 20px rgba(16, 185, 129, 0.15)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      }
    },
  },
  plugins: [],
}
