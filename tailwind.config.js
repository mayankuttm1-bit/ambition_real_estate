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
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 15px rgba(197, 160, 89, 0.25)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 28px rgba(197, 160, 89, 0.55)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeInScale: 'fadeInScale 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideUp: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'floatSlow 3.5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}
