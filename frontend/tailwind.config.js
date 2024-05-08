/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mm: "200px",
      sm: "480px",
      md: "768px",
      lg: "1028px",
      xl: "1440px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
