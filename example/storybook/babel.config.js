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
                ['@gluestack-style/react']: path.join(
                  __dirname,
                  '../../packages/react/src'
                ),
                ['@gluestack-style/convert-utility-to-sx']: path.join(
                  __dirname,
                  '../../packages/convert-utility-to-sx/src'
                ),
                ['@gluestack-style/css-injector']: path.join(
                  __dirname,
                  '../../packages/css-injector/src'
                ),
                ['@gluestack-style/cssify']: path.join(
                  __dirname,
                  '../../packages/cssify/src'
                ),
                ['@gluestack-style/color-mode']: path.join(
                  __dirname,
                  '../../packages/color-mode/src'
                ),
                ['@gluestack-style/animation-plugin']: path.join(
                  __dirname,
                  '../../packages/animation-plugin/src'
                ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
