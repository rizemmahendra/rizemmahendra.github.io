/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#006A67",
        secondary: "#FFF4B7",
        third: "#209CC1",
        // third: "#5FD7FA",
      },
      backgroundColor: {
        primary: "#000B58",
        secondary: "#003161",
        third: "#209CC1",
        // third: "#5FD7FA",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./src/assets/hero-pattern.jpg')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        ZenDots: ["Zen Dots", "cursive"],
        Yellowtail: ["Yellowtail", "cursive"],
      },
      dropShadow: {},
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
