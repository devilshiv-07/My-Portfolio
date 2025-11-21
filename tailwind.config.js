/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // 60px - for lg:mt-15
      },
    },
  },
  plugins: [],
}

