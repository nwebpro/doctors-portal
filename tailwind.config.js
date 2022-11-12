/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1440px'
    },
   extend: {
    colors: {
      'theme-1st': '#0FCFEC',
      'theme-2nd': '#19D3AE',
      'theme-3rd': '#3A4256',
    },
    boxShadow: {
      'box-shadow': '3px 4px 10px 2px rgba(0, 0, 0, 0.05)',
    },
    backgroundImage: {
      'appointment-bg': "url('/src/assets/images/appointment.png')",
      'footer-bg': "url('/src/assets/images/footer.png')",
    },
   },
  },
  plugins: [],
}