const tailwind = require('tailwindcss/defaultTheme')
const dev = process.env.NODE_ENV === 'development'
module.exports = {
  purge: {
    enabled: dev ? false : true,
    mode: 'all',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.pcss'
    ]
  },
  theme: {
    fontFamily: {
      sans: ['Rubik', ...tailwind.fontFamily.sans]
    },
    colors: {
      // For good default functionality
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      // custom colors
      header: {
        selected: 'var(--header-bg-selected)',
        default: 'var(--header-bg)',
      }
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
