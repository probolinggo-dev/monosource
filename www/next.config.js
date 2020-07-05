const withLess = require('@zeit/next-less');

module.exports = () => {
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  });
};
