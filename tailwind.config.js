module.exports = {
  // mode: 'jit',
  purge: {
    content: [
      'content/**/*.md'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {},
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
