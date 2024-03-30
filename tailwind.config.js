/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        penguins: "url('./src/assets/penguins.svg')",
      },
      fontFamily: {
        primary: ["Noto Serif", "serif"],
        secondary: ["Patua One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
