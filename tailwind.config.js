/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair": ['Playfair', 'serif']
      },
      backgroundImage: {
        'primary': "url('/src/assets/base-backround.jpg')",
      }
    },
  },
  plugins: [],
}

