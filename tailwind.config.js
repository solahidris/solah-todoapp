/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js", "./src/components/reactlogo.js"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}