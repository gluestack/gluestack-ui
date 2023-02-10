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
                ['@universa11y/react-native-aria']: path.resolve(
                  __dirname,
                  '../react-native-aria/src'
                ),
                ['@universa11y/hooks']: path.resolve(__dirname, '../hooks/src'),
                ['@universa11y/transitions']: path.resolve(
                  __dirname,
                  '../transitions/src'
                ),
                ['@universa11y/overlay']: path.resolve(
                  __dirname,
                  '../overlay/src'
                ),
                ['@universa11y/utils']: path.resolve(__dirname, '../utils/src'),
                // For development, we want to alias the library to the source
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
