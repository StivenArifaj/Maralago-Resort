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
        'hero-pattern': "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')",
        'spa-pattern': "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
    },
  },
  plugins: [],
};