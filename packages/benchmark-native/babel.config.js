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
                  '../../react/src'
                ),
                ['@gluestack-style/media-query']: path.join(
                  __dirname,
                  '../media-query/src'
                ),
                ['@gluestack-style/css-injector']: path.join(
                  __dirname,
                  '../css-injector/src'
                ),

                ['@gluestack-style/cssify']: path.join(
                  __dirname,
                  '../cssify/src'
                ),
                ['@gluestack-style/config']: path.join(
                  __dirname,
                  '../config/src'
                ),
                ['@gluestack-style/convert-utility-to-sx']: path.join(
                  __dirname,
                  '../convert-utility-to-sx'
                ),
              },
            },
          ]
        : ['transform-remove-console'],
    ],
  };
};
