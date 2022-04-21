module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '400px' },
    },
    fontFamily: {
      Poppins: ['Poppins', "sans-serif"]
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        'contact-blue': '#2274A5',
        'light-blue': 'rgb(49, 104, 213)',
        'dark-grey': '#272727',
        'light-grey': '#EDEDED',
      }
    },
  },
  plugins: [],
}