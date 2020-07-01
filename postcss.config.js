const dev = process.env.NODE_ENV === 'development'
let plugins = [require('tailwindcss')]

if (!dev) {
  plugins = [
    ...plugins,
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}

module.exports = {
  plugins
};