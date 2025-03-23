/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mooli', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#4263a5', // Main primary blue color (original color from site)
          700: '#354a7d', // Darker primary blue
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f6f7f1',
          100: '#e3e6d8',
          200: '#c7cdb4',
          300: '#a7b089',
          400: '#839665',
          500: '#5e7047',
          600: '#4a5a38',
          700: '#3c482e',
          800: '#2f3725',
          900: '#272d1f',
          950: '#141710',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#e3364d', // Original accent/highlight color from site
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        empty: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
          '30%': { clipPath: 'polygon(0 16%, 100% 12%, 100% 100%, 0% 100%)' },
          '50%': { clipPath: 'polygon(0 40%, 100% 44%, 100% 100%, 0% 100%)' },
          '70%': { clipPath: 'polygon(0 69%, 100% 66%, 100% 100%, 0% 100%)' },
          '100%': { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' },
        },
        showContent: {
          to: {
            transform: 'translateY(0)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 0.8s ease-out',
        empty: 'empty 4s linear forwards',
        showContent: 'showContent 0.5s linear forwards',
      },
      screens: {
        'xs': '480px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'nav': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      scale: {
        '105': '1.05',
        '110': '1.1',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}