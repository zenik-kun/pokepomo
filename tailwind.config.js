/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js, jsx, ts, tsx}", "./components/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#79C9FA",
        grass: "#7FAC71"
      },
      fontFamily: {
        pokemon: ["pokemon", "sans-serif"]
      }
    },
  },
  plugins: [],
}

