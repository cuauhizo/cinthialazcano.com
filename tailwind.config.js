/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'lemon-bold': ['"lemon-bold"', 'sans-serif'],
        'lemon-normal': ['"lemon-normal"', 'sans-serif'],
        'lemon-light': ['"lemon-light"', 'sans-serif'],
        raleway: ['"raleway"', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'tolko-red': 'rgb(204, 0, 50)',
        'tolko-purple': 'rgb(81, 0, 143)',
        'tolko-purple2': '#47007D',
        bgLight: '#F8F9FA',
        textMain: '#111111',
        textMuted: '#555555',
        cardGreen: '#D7F9E9' /* Inspirado en Zylo/Medicare */,
        cardPurple: '#E8E2FF' /* Inspirado en EduFlex */,
        cardYellow: '#FFF2D1',
        accentDark: '#1A1A1A',
        accentNeon: '#CCFF00' /* Verde neón tipo app de Tenis */,
      },
      backgroundImage: {
        'close-menu': "url('../assets/img/icon-close.svg')",
        'open-menu': "url('../assets/img/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
