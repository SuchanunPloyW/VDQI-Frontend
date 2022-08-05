module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter','IBM Plex Sans Thai', 'sans-serif']
        
      },

      gridTemplateColumns:{
        '30': 'repeat(30, minmax(0, 1fr))',
        'footer': '200px minmax(900px, 1fr) 100px',


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
