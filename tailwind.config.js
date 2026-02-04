/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html, ", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        proof: "#22c55e",
      },
      fontFamily: {
        sans: ['"Segoe UI"', "sans-serif"],
        segoe: ['"Segoe UI"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
