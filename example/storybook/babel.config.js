const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                // For development, we want to alias the library to the source
                ['@dank-style/react']: path.join(
                  __dirname,
                  '../../packages/react/src/index'
                ),
                ['@dank-style/convert-utility-to-sx']: path.join(
                  __dirname,
                  '../../packages/convert-utility-to-sx/src'
                ),
                ['@dank-style/css-injector']: path.join(
                  __dirname,
                  '../../packages/css-injector/src'
                ),
                ['@dank-style/cssify']: path.join(
                  __dirname,
                  '../../packages/cssify/src'
                ),
                ['@dank-style/color-mode']: path.join(
                  __dirname,
                  '../../packages/color-mode/src'
                ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
