/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eggplant: "#4D303F",
        eggWhite: "#F8E8CC",
        lemonTart: "#E6D389",
        blueberry: "#2F2A35",
      },
    },
  },
  plugins: [],
};
