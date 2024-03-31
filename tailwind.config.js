/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s both ease-out",
        "fade-in-slide-up": "fade-in-slide-up 0.3s ease-out",
        "fade-out-slide-down": "fade-out-slide-down 0.3s both ease-out",
      },
      backgroundImage: {
        penguins: "url('./src/assets/penguins.svg')",
      },
      fontFamily: {
        primary: ["Noto Serif", "serif"],
        secondary: ["Patua One", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fade-in-slide-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-out-slide-down": {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
        },
      },
    },
  },
  plugins: [],
};
