module.exports = {
  purge: ['./src/**/*.svelte', 'index.html'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ]
};