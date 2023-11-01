/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        contrastPurple: "#630C63",
        subContrastPurple: "#320032",
        lightPurple: "#800080",
        textGray: "#555555",
        maincolor: "#b5b5b5",
      },
      fontFamily: {
        ff: "ff",
        "roboto-slab": "Roboto Slab",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
