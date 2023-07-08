/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayCyan: 'hsl(186, 14%, 43%)',
        grayCyan: 'hsl(184, 14%, 56%)',
        lightGrayCyan: 'hsl(185, 41%, 84%)',
        vLightGrayCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',

        redColor: 'hsl(346, 100%, 43%)',
        hoverColor: '#8cded2',
        disabledColor: '#0D686D',
        disabledText: '#055D61',
      },
      fontFamily: {
        spaceMono: ['Space Mono', 'sans-serif'],
      },
    },
    screens: {
      tabletsm: '550px',
      tabletmd: '700px',
      laptopsm: '900px',
    },
  },
  plugins: [],
};
