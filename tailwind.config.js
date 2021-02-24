module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    colors: {
      'main-from': '#8159C6',
      'main-to': '#6C7CFF',
      white: '#fff',
      yellow: '#FFDE00',
      'yellow-dirty': '#EACC00',
      'header-item': '#C9C3F3',
      dot: '#6B2C88',
      orange: '#FF885E',
      'list-title': '#C9C3F3',
      violet: '#6845AE',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1265px',
    },
    extend: {
      lineHeight: {
        '1-2': '1.2',
      },
      spacing: {
        4.5: '1.175rem',
        6.5: '1.1626rem',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
      fontSize: {
        main: '48px',
      },
      width: {
        dot: '5px',
      },
      height: {
        dot: '5px',
      },
      margin: {
        '13px': '13px',
      },
      animation: {
        price: 'price 3s linear infinite',
      },
      boxShadow: {
        btn:
          '0px 0px 30px rgba(255, 222, 0, 0.35), inset 0px -2px 2px rgba(0, 0, 0, 0.25)',
      },
      translate: {
        '6/10': '60%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-gradients')],
}
