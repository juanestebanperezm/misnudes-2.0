/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary-dark': '#1b1435',
        'secondary-dark': '#1b1435',
        lila: '#9268f0'
      })
    },
    plugins: require('tailwind-scrollbar')
  },
  plugins: []
}
