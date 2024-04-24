/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#CCD5D2',
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

        rawWhite: "#FFFFFF",
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
        xxl: ["0 4px 16px rgba(0, 0, 0, 0.10)"],
      },

      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '30': '30px',
      },
      inset: {
        '30': '30px',
      },
      width: {
        '200.17': '200.17px',
        '310': '310px',
      },
      
    height: {
      '35': '35px',
      '310': '310px',
    },
    },
  },
  plugins: [],
};
