module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width : {
        '100' : '25rem',
        '3/10' : '30%',
        '8/25' : "32%",
        '1/50'  : '2%',
        '5/20' : '5%',
        '9/20' : '45%' 
      },
      fontSize: {
        '2xs' : '0.65rem'
      }
      ,backgroundColor: theme => ({
        'overlay': 'rgba(0, 0, 0, 0.4)',
       })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
