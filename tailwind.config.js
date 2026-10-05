/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        leather: {
          50: '#faf7f2',
          100: '#f0e8db',
          200: '#e0d0b8',
          300: '#c9ae86',
          400: '#b08d5e',
          500: '#9a6f43',
          600: '#7e5836',
          700: '#63432b',
          800: '#4a3220',
          900: '#332417',
          950: '#1e160e',
        },
        sand: {
          50: '#fdfcfa',
          100: '#f8f4ed',
          200: '#efe8d8',
          300: '#e3d4b8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
