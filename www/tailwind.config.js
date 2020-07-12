const { darken } = require('polished');

const buildColorVariants = (color) => {
  return {
    100: color,
    200: darken(0.01, color),
    300: darken(0.02, color),
    400: darken(0.03, color),
    500: darken(0.04, color),
    600: darken(0.05, color),
    700: darken(0.06, color),
    800: darken(0.07, color),
    900: darken(0.08, color),
  };
};

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: buildColorVariants('#0099FF'),
        secondary: buildColorVariants('#FFBB00'),
        coffee: buildColorVariants('#342E37'),
        whitesmoke: buildColorVariants('#f0f0f8'),
      },
    },
  },
  variants: {},
  plugins: [],
};
