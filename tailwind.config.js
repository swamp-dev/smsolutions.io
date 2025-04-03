/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF9D',
        dark: '#111111',
        light: '#FFFFFF',
        gray: {
          100: '#F3F4F6',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      textColor: {
        primary: '#00FF9D',
      },
      borderColor: {
        primary: '#00FF9D',
      },
      backgroundColor: {
        primary: '#00FF9D',
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 