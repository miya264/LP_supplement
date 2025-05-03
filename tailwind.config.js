/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'natural': {
          50: '#FDFBF7',  // Ivory
          100: '#F5F0E6', // Warm ivory
          200: '#E6DCC8', // Light beige
          300: '#D4C5AA', // Beige
          400: '#B8A182', // Soft brown
          500: '#2F4A3E', // Forest green
          600: '#1E3029', // Deep forest green
        }
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
        'display': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};