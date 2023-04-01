const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: colors.white,
      black: '#121212',
      gray: '#a3a3a3',
      'gray-2': '#333',
      yellow: '#fccc03',
    },
    extend: {},
  },
  plugins: [],
}
