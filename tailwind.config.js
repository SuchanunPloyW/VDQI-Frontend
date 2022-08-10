module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter','IBM Plex Sans Thai', 'sans-serif']
        
      },

      gridTemplateColumns:{
        '15': 'repeat(15, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
     /*    'footer': '200px minmax(900px, 1fr) 100px', */
      }

    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}
