const { addIconSelectors } = require("@iconify/tailwind");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      backgroundColor: {
        appgreen: "rgb(0,255,67)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [addIconSelectors(["mdi", "mdi-light"]), addDynamicIconSelectors()],
};
