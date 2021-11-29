const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    colors: {
      accents: {
        1: '#E7E9E9',
        2: '#BDC5C8',
        3: '#040404',
        4: '#F2FDAA',
        5: '#5A5A55',
        6: '#C7EB21',
        7: '#63C86E'
      }
    },
    extend: {
      width: {
        300: '300px',
        350: '350px',
        400: '400px'
      },
      maxWidth: {
        300: '300px',
        350: '350px',
        400: '400px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
