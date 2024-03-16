/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'uol-svg': "url('/img/logo.svg')",
        'uol-png': "url('/img/logo.png')",
      }
    },
  },
  plugins: [],
};