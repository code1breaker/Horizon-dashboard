/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1300px" },

      xl: { max: "1199px" },

      lg: { max: "991px" },

      md: { max: "767px" },

      sm: { max: "576px" },
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
