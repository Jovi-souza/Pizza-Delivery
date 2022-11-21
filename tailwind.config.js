/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Cabin: ['Cabin Sketch', 'cursive'],
    },
    animation: {
      openModal: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
    width: {
      Modal: '22rem',
    },
  },
  plugins: [],
}
