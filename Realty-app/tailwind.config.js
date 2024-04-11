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
        hover: {
          accent: "#A48937",
          faqs: "#CCD5D2",
        },

        black: "#1C1C1C",
        white: "#F9F9F9",
        gray: "#7F7F7F",
        input: "#EDEFF4",
      },

      fontFamily: {
        playFair: ["Playfair Display, serif"],
        noto: ["Noto Serif Display, serif"],
        helvetica: ["Helvetica"],
      },

      boxShadow: {
        xl: ["0 2px 15px rgba(0, 0, 0, 0.10)"],
      },
    },
  },
  plugins: [],
};
