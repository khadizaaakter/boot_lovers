/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5efe6',
        'cream-soft': '#faf6ef',
        ink: '#1a1a1a',
        'ink-soft': '#4b4b4b',
        muted: '#8a8478',
        brand: {
          DEFAULT: '#f59222',
          50: '#fff1e0',
          100: '#ffe0bd',
          500: '#f59222',
          600: '#e07a10',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
