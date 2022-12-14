/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      display: ["Pacifico", "cursive"],
      body: ["Roboto", "sans-serif"]
    },
    extend: {
    
      backgroundImage: {
        'cut-gradient-one' : "linear-gradient(#111827 50%, #3730A3 50%)" ,  
        'cut-gradient-two' : "linear-gradient(#3730A3 50%, #E5E7EB 50%)" ,
        'cut-gradient-three' : "linear-gradient( #E5E7EB 50%, #F43F5E 50%)" 
      
      },

      keyframes: {
        neon: {
          '0%' : {
            'text-shadow':
            '0 0 6px rgba(202,228,225,0.92)',
            'text-shadow':
            '0 0 10px rgba(202,228,225,0.34)',
            'text-shadow':           '0 0 12px rgba(30,132,242,0.52)',
            'text-shadow':'0 0 21px rgba(30,132,242,0.92)',
            'text-shadow':'0 0 34px rgba(30,132,242,0.78)',
            'text-shadow':'0 0 54px rgba(30,132,242,0.92)',
          },
          '100%': {
            'text-shadow':
            '0 0 6px rgba(202,228,225,0.98)',
            'text-shadow':
            '0 0 10px rgba(202,228,225,0.42)',
            'text-shadow':
            '0 0 12px rgba(30,132,242,0.58)',
            'text-shadow':
            '0 0 22px rgba(30,132,242,0.84)',
            'text-shadow':
            '0 0 38px rgba(30,132,242,0.88)',
            'text-shadow':
            '0 0 60px rgba(30,132,242,1)'
          }
      
          
        },
      
    },
    animation:{
      neon: 'neon 0.5s infinite'
    }
  },
  plugins: [],
}
}