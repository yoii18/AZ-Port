/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#003865'
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-customBlue',
  ],
}
