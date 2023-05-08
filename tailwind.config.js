/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      // text-brand로 접근가능.
      colors: {
        brand: '#FF0000',
      },
    },
  },
  plugins: [],
};
