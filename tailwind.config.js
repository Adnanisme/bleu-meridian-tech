/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060E1A',
          900: '#0C1D34',
          800: '#0C2340',
          700: '#122D4F',
          600: '#1A3D66',
        },
        brand: {
          dark: '#0C2340',
          mid: '#1A6DB5',
          light: '#7DD3FC',
          glow: '#A5E1FF',
        },
      },
    },
  },
  plugins: [],
}
