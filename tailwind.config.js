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
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
        'float-reverse': 'float-reverse 22s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -40px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-25px, 35px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(calc(-50% + 20px), calc(-50% - 30px))' },
        },
      },
    },
  },
  plugins: [],
}
