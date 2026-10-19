/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colours sampled from the Reyansh Prime logo
        navy: {
          50: '#EEF3FB',
          100: '#D6E2F5',
          200: '#ADC4EA',
          300: '#7A9DD8',
          400: '#4471C0',
          500: '#1D52A8',
          600: '#0A4399',
          700: '#02368A',
          800: '#022A6B',
          900: '#021D4B',
        },
        crimson: { 50: '#FDF1F2', 100: '#FADCDF', 400: '#E04452', 500: '#CD1E2C', 600: '#AD1824', 700: '#8C131D' },
        ivory: { DEFAULT: '#F6F8FC', 100: '#EDF1F8', 200: '#E1E7F2' },
        gold: { 400: '#F2B33D', 500: '#D9971F' },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(2, 54, 138, 0.20)',
        card: '0 2px 12px -2px rgba(2, 54, 138, 0.08)',
      },
    },
  },
  plugins: [],
};
