/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    themes: ["dark", "light"],
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

