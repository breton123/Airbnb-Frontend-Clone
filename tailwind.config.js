/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      "black": "#222222",
      "gray": "#717171",
      "red": "#FF385C",
      "white": "#FFFFFF"
    }
  },
  plugins: [require("daisyui")],
}
