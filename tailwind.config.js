/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {

      colors: {
        black : {
          100: '#1F1F1F'
        },
        green : '#28E98C'
      },
    },
  },
  plugins: [],
}

