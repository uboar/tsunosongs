/** @type {import('tailwindcss').Config} */
// tailwind.config.js 
// FreeBSD-licensed CSS animation by Animista 


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        "fade-in-fast": "fade-in-fwd 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-fwd": "fade-in-fwd 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-right": "fade-in-right 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-left": "fade-in-left 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "fade-in-fast": {
          "0%": {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },
        "fade-in-fwd": {
          "0%": {
            transform: "scale(0.9, 0.9)",
            opacity: "0"
          },
          to: {
            transform: "scale(1, 1)",
            opacity: "1"
          }
        },
        "fade-in-right": {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "fade-in-left": {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
      }
    },
  },
  plugins: [],
}

