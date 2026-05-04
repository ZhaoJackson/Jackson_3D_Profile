/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#04091a",       // DSI deep navy
        secondary: "#8ea8c9",     // steel-blue grey (readable on navy)
        tertiary: "#071528",      // mid-navy panel bg
        "black-100": "#060e1f",   // card navy
        "black-200": "#03080f",   // deepest navy
        "white-100": "#f0f6ff",   // cool white
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0b2040",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
