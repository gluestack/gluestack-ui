const path = require('path');
const myBabel = require('@gluestack-style/babel-plugin-styled-resolver');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-next', '@babel/preset-typescript'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [myBabel]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
      ['@babel/plugin-transform-flow-strip-types'],
    ],
  };
};
