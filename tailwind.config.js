
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cinema: {
          black: "#050505",
          dark: "#0a0a0a",
          surface: "#121212",
          text: "#e5e5e5",
          muted: "#a3a3a3",
          cyan: "#06b6d4",
          gold: "#fbbf24",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        'spotlight-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
