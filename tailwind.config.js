/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          darkest: '#051812',
          dark: '#08251c',
          deep: '#0e3629',
          surface: '#134736',
          border: 'rgba(197, 160, 89, 0.25)',
          paper: '#fdfcf9',
          cream: '#f8f5ee',
          card: '#ffffff',
          gold: {
            light: '#eed8a1',
            DEFAULT: '#c5a059',
            dark: '#a8813a',
            deep: '#8b6727',
            shimmer: '#fbf0d4'
          },
          ink: '#111827',
          muted: '#64748b'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(8, 37, 28, 0.15), 0 4px 6px -2px rgba(8, 37, 28, 0.05)',
        'luxury-lg': '0 20px 40px -15px rgba(8, 37, 28, 0.25), 0 0 20px 2px rgba(197, 160, 89, 0.12)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.35)',
      }
    },
  },
  plugins: [],
}
