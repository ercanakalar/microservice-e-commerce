/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-background': "url('/public/images/gradient-wallpapers.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
