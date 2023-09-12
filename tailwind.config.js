/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
        bigShouldersDisplay: ["Big Shoulders Display", "cursive"],
      },
      colors: {
        userBrightOrange: "hsl(31, 77%, 52%)",
        userDarkCyan: "hsl(184, 100%, 22%)",
        userVeryDarkCyan: "hsl(179, 100%, 13%)",
        userParagraphWhite: "hsla(0, 0%, 100%, 0.75)",
        userVeryLightGray: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
}