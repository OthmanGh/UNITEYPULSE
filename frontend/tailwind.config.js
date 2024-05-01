/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#3F72AF',
        secondary: '#112D4E',
        black: '#222',
        lightBlue: '#DBE2EF',
        white: '#F9F7F7',
        skyBlue: '#A8D9F2',
        lightSkyBlue: '#CDEEFF',
        darkbg: '#0d1117',
        columnbg: '#161c22',

        gradientDarkBlue: '#112D4E',
        gradientNormalBlue: '#3F72AF',

        gradientWhite: '#E2EDF3',
        gradientBlue: '#3F72AF',

        gradientDark: '#001731',
        gradientSkyBlue: '#DBECFF',

        gradientActiveDark: '#001731',
        gradientActiveBlue: '#1C4F8B',

        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
    },

    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    backgroundImage: {
      'earning-img':
        "url('https://plus.unsplash.com/premium_photo-1663931932688-86ce797dcccb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
  },
  plugins: [],
};
