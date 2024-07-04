/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#79C9FA",
        grass: {
          DEFAULT: "#7FAC71",
          100: "#A4E75A",
        },
      },
      fontFamily: {
        pokemon: ["pokemon", "sans-serif"]
      }
    },
  },
  plugins: [],
}

