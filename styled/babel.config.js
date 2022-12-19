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
                ['@gluestack/ui-styled']: path.join(__dirname, './src'),
                ['@gluestack/media-query']: path.join(
                  __dirname,
                  '../media-query/src'
                ),
                ['@gluestack/css-injector']: path.join(
                  __dirname,
                  '../css-injector/src'
                ),
                ['@gluestack/cssify']: path.join(__dirname, '../cssify/src'),
              },
            },
          ]
        : ['transform-remove-console'],
    ],
  };
};
