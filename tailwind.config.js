/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1e1e1e',
        card: '#2b2b2b',
        accent: '#facc15', // Yellow-400
      },
    },
  },
  plugins: [],
};
