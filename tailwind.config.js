/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Cinzel: ["Cinzel", "serif"],
    },
    boxShadow: {
      "3xl": "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [require("daisyui")],
};
