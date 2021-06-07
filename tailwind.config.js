module.exports = {
  purge: [
  	'./src/**/*.{js,jsx,ts,tsx}', 
  	'./public/index.html',
    '/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        my: {
          'blue-light': '#4FEBE6',
          'blue-dark': '#0b2640',
          'white': '#E3E1DC'
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}
