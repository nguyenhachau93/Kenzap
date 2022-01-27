module.exports = {
  content: ["./layouts/*.html"],
  theme: {
    extend: {
      
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
    },
  },


  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1170px',
  },


  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1170px',
          },
        }
      })
    }
  ]
}