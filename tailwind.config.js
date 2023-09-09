/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        intro: {
          from: { transform: "rotateY(0deg) scale(1.5)" },
          to: { transform: "rotateY(360deg) scale(1.0)" },
        },
      },
      animation: {
        intro: "intro 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
}

