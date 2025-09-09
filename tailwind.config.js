/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
   ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['"Poiret One"', 'cursive'],
        funnel: ['"Funnel Display"', 'cursive'],
        delius: ['Delius', 'cursive'],
      },
    },
  },
  plugins: [],
}
