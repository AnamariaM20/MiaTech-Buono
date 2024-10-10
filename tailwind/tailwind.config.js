/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors:{
      "blumarine": '#6DC0D5',
      "pulsante1" : "#B2CEDE"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      color: {
        "primary": "#AD7A99",
      },
      spacing: {
      },
      margin: {
        miomargin: "27px"
      },
      padding: {
        miopadding: "7px"
      }
    },
  },
  plugins: [],
}
