const path = require('path');

console.log('babel config :::::');
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
                // ['@gluestack/ui']: path.join(
                //   __dirname,
                //   '../../packages/Button/src'
                // ),
                // ['@universa11y/button']: path.join(
                //   __dirname,
                //   '../../packages/button/src'
                // ),
                // ['@universa11y/actionsheet']: path.join(
                //   __dirname,
                //   '../../packages/actionsheet/src'
                // ),
                // ['@universa11y/transitions']: path.join(
                //   __dirname,
                //   '../../packages/transitions/src'
                // ),
                // ['@universa11y/react-native-aria']: path.join(
                //   __dirname,
                //   '../../packages/react-native-aria/src'
                // ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
