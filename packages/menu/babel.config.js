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
                // Uncomment below code to use @gluestack-ui/react-native-aria
                ['@gluestack-ui/react-native-aria']: path.resolve(
                  __dirname,
                  '../react-native-aria/src'
                ),
                // Uncomment below code to use @gluestack-ui/utils
                // ['@gluestack-ui/utils']: path.resolve(
                //   __dirname,
                //   '../utils/src'
                // ),
                // For development, we want to alias the library to the source
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
