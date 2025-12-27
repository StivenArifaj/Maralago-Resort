/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        gold: {
          light: '#f5e7c1',
          DEFAULT: '#d4af37',
          dark: '#9e7c1e',
        },
        burgundy: {
          light: '#9e2a2b',
          DEFAULT: '#800020',
          dark: '#4a0011',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};