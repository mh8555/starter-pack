/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
        exo: ['"Exo"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
      screens: {
        // min width
        sm: "425px",
        md: "576px",
        lg: "768px",
        xl: "992px",
        "2xl": "1200px",

        // max-width
        "max-sm": { max: "575px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "991px" },
        "max-xl": { max: "1199px" },
        "max-2xl": { max: "1399px" },

        // min-width and max-width
        "custom-sm": { min: "425px", max: "575px" },
      },
    },
  },
  plugins: [],
};
