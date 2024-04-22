/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3F72AF',
        secondary: '#112D4E',
        black: '#222',
        lightBlue: '#DBE2EF',
        white: '#F9F7F7',
        skyBlue: '#A8D9F2',
        lightSkyBlue: '#CDEEFF',

        gradientOneBlueDark: '#112D4E',
        gradientOneBlueNormal: '#3F72AF',

        gradientTwoWhite: '#E2EDF3',
        gradientTwoBlue: '#3F72AF',

        gradientThreeDark: '#001731',
        gradientThreeSkyBlue: '#DBECFF',

        gradientFourActiveOne: '#001731',
        gradientFourActiveTwo: '#1C4F8B',
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
  },
  plugins: [],
};
