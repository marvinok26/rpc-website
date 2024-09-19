/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
      },

      screens: {
        'xs': '480px',
      },
      spacing: {
        '32': '8rem',
        '40': '10rem',
      },
      animation: {
        slideIn: 'slideIn 3s forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      spacing: {
        '8': '2rem',
        '5': '1.25rem',
      },
      colors: {
        'blue-700': '#4263A5',
      },
      scale: {
        '110': '1.1',
        '105': '1.05',
      },
    },
  },
  plugins: [],
}

