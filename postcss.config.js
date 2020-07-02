const dev = process.env.NODE_ENV === 'development'
let plugins = [require('tailwindcss')]

if (!dev) {
  plugins = [
    ...plugins,
    require('autoprefixer'),
  ]
}

module.exports = {
  plugins
};