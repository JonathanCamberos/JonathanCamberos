/** @type {import('tailwindcss').Config} */

// fontFamily comes from Google Importing
// Colors / BoxShadow come from recommendations on Google haha
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        titleText: "#ffffff",
        lightText: "#c4cfde",
        secondaryText: "#e5e7eb",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#03fc7b",
        designColorTwo: "green-500",
        // designColor: "#ff014f",
        darkBodyColor: "#ffffff",
        darkLightText: "#000000",
        darkSecondaryText: "#000000",
        darkBoxBg: "#000000",
        darkDesignColor: "#6f5fdb",
        darkSecondaryDesignColor: "#c6d1fd"

      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo: "10px 10px 19px #6f5fdb, -10px -10px 19px #6f5fdb"
      },
    },
  },
  plugins: [],
}