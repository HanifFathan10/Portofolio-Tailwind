/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#155e75',
        secondary: '#64748b',
        dark: '#171717',
        deep: '#121212',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

