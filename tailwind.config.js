module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Alternates", "sans-serif"],
        primary: ["Cormorant Garamond", "serif"],
      },
      colors: {
        background: "#191919",
        primary: "#2D4263",
        secondary: "#C84B31",
        tertiary: "#ECDBBA",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
