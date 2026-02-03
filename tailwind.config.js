/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 60px rgba(15, 22, 40, 0.12)'
      }
    }
  },
  plugins: []
};
