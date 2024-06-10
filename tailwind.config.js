/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        fade: 'fade 1s ease-in-out',
      },
    },
  },
  plugins: [require('daisyui'),
    require('tailwind-typewriter')({
      wordsets: {
          fruit: {
              words: ['EduPulse.', 'Surveys.', 'Health.', 'Data.', 'Trends.', 'EduPulse.'],
              delay: 0,
              writeSpeed: 0.15,
              repeat: 0,
              eraseSpeed: 0,
              pauseBetween: 2,
              caretWidth: '4px',
          }
      }
    })
  ],
}
