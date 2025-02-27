/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9C27B0', // Violet-rouge
          dark: '#7B1FA2',
          light: '#CE93D8',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          lighter: '#2D2D2D',
        }
      },
    },
  },
  plugins: [],
};