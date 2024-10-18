/** @type {import('tailwindcss').Config} */

const colors = {
  pageBg: "#1E1E1E",
  white: "#FFFFFF",
  lightWhite: "rgb(255 255 255 / 10%)",
  black: "#000000",
  lightBlack: "#1E1E1E",
  purple60: "#703BF7",
  purple65: "#8254F8",
  purple70: "#946CF9",
  purple75: "#A685FA",
  purple90: "#DBCEFD",
  purple95: "#EDE7FE",
  purple97: "#F4F0FE",
  purple99: "#FCFCFD",
  gray08: "#141414",
  gray10: "#1A1A1A",
  gray15: "#262626",
  gray20: "#333333",
  gray30: "#4D4D4D",
  gray40: "#666666",
  gray50: "#808080",
  gray60: "#999999",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: colors,
      colors: colors,
      width: {
        desk: "120rem",
        laptop: "90rem",
        mobile: "24.375rem",
      },
      backgroundImage: {
        banner: "url(./src/data/bannerbg.png)",
      },
      screens: {
        customSize: { min: "1280px", max: "1550px" },
        "3xl": { min: "1650px" },
      },
    },
  },
  plugins: [],
};
