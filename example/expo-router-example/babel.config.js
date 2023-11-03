const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            ['@gluestack-style/react']: path.join(
              __dirname,
              '../../packages/react/src'
            ),
          },
        },
      ],
      // Required for expo-router
      'expo-router/babel',
    ],
  };
};
