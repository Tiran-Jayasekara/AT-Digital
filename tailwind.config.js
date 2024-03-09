/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluish-purple': '#6A5ACD',
        'interstellar-blue': '#395B7D',
        'rich-blue': '#00203FFF',
        'yuzu-jam': '#FFBC42',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

