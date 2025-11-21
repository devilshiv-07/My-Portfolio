/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: [
    'dark:from-blue-400',
    'dark:to-cyan-400',
    'dark:from-purple-400',
    'dark:to-pink-400',
    'dark:from-green-400',
    'dark:to-emerald-400',
    'dark:from-indigo-400',
    'dark:to-purple-400',
    'dark:from-yellow-400',
    'dark:to-orange-400',
    'dark:from-red-400',
    'dark:to-rose-400',
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // 60px - for lg:mt-15
      },
    },
  },
  plugins: [],
}

