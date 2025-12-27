/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeInUp: {
          from: {
            opacity: 0,
            transform: 'translateY(20px) rotateX(-10deg)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0) rotateX(0deg)',
          },
        },
        slideIn: {
          from: {
            transform: 'scaleX(0)',
          },
          to: {
            transform: 'scaleX(1)',
          },
        },
        scaleIn: {
          from: {
            opacity: 0,
            transform: 'scale(0.95)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'blob-move': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
        scaleIn: 'scaleIn 1s ease-in-out',
        'gradient-flow': 'gradient-flow 15s ease infinite',
        'blob-move': 'blob-move 20s ease-in-out infinite',
      },
      colors: {
        accent: '#15E0FB',
      },
    },
  },
  plugins: [],
};
