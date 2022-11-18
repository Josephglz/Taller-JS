/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{html,js,hbs}",
    "./views/**/*.{html,js,hbs}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['lato']
      }
    },
  },
  plugins: [],
}