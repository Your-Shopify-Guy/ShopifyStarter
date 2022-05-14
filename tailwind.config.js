module.exports = {
  content: [
    './sections/*.liquid',
    './layout/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid' //If you're not using JSON for customer templates
  ],
  theme: {
    extend: {
       height: {
        '94': '22rem'
      }
    }
  },
  plugins: []
}
//   './**/*.{liquid,json}' selects all files to be scaned by tailwind for liquid or json templates
