// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        wealth: {
          blue: '#3ABEFF',      // Vibrant Light Blue
          blueDark: '#1A4D8C', // Deep Blue for contrast
          blueLight: '#E6F6FF', // Very light blue background
          purple: '#7B61FF',    // Accent purple
          gold: '#FFD166',      // Bright gold accent
          accent: '#FF6B6B',    // Coral accent
          white: '#FFFFFF',
          gray: '#F4F7FA',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}