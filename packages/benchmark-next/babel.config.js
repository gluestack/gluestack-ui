const path = require('path');
const myBabel = require('@dank-style/babel-plugin-styled-resolver');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-next', '@babel/preset-typescript'],
    plugins: [
      myBabel,
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                // For development, we want to alias the library to the source
                // ['@gluestack/ui']: path.join(__dirname, '../ui/src'),
                // // ['dank-style']: path.join(__dirname, '../styled/src'),
                // ['@gluestack/ui-creator']: path.join(
                //   __dirname,
                //   '../creator/src'
                // ),
                // ['@gluestack/color-mode']: path.join(
                //   __dirname,
                //   '../color-mode/src'
                // ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
      ['@babel/plugin-transform-flow-strip-types'],
    ],
  };
};
