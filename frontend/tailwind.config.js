/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },

    extend: {
      colors: {
        secondary: '#176B87',
        primary: '#64CCC5',
        dark: '#053B50',
        light: '#A6F6F1',

        secondaryHover: '#0f5369',
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

      loveBinary:
        "url('https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhdGF8ZW58MHx8MHx8fDA%3D')",

      bg1: "url('https://images.unsplash.com/photo-1562575214-da9fcf59b907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8')",

      bg2: "url('https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGRhdGF8ZW58MHx8MHx8fDA%3D')",
    },
  },
  plugins: [],
};
