/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black : {
          100: '#1F1F1F'
        },
        green : '#28E98C',
        gray : '#656565'
      },
    },
  },
  plugins: [],
}

