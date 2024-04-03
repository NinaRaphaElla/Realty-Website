/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14593F",
        secondary: {
          100: "#668378",
          200: "#089860",
          300: "#01311F",
        },
        accent: "#C6AA58",

        black: "#1C1C1C",
        white: "#F9F9F9",
        gray: "#7F7F7F",
      },

      fontFamily: {
        playFair: ["Playfair Display, serif"],
        noto: ["Noto Serif Display, serif"],
      },
    },
  },
  plugins: [],
};