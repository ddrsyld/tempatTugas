/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        1: "2rem",
        2: "4rem",
        'aboutImg': "25rem"
      },
      backgroundImage: {
        'home-image': "url('/public/img/bg.png')"
      },
      fontSize: {
        'home-fs': "4rem"
      },
      width: {
        'home-title': "40rem"
      }
    },
  },
  plugins: [],
} 