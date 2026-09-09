/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          900: "#0d1424",
          700: "#2b3550",
          500: "#5a6480",
          400: "#7c86a0",
        },
        accent: {
          50: "#eef2ff",
          300: "#a5b4ff",
          500: "#4f6bff",
          600: "#3d54e6",
        },
        mint: "#37d3c0",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glass: "0 12px 40px -12px rgba(24,38,84,0.18), 0 2px 8px -2px rgba(24,38,84,0.08)",
        lift: "0 24px 60px -18px rgba(24,38,84,0.28)",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%,-6%,0) scale(1.08)" },
          "66%": { transform: "translate3d(-5%,4%,0) scale(0.95)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 34s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
