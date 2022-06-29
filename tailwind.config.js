module.exports = {
  // mode: 'jit',
  content: [
    'content/**/*.md'
  ],
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
