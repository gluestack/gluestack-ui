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
                ['@gluestack-ui/hooks']: path.resolve(
                  __dirname,
                  '../hooks/src'
                ),
                ['@gluestack-ui/transitions']: path.resolve(
                  __dirname,
                  '../transitions/src'
                ),
                ['@gluestack-ui/overlay']: path.resolve(
                  __dirname,
                  '../overlay/src'
                ),
                ['@gluestack-ui/utils']: path.resolve(
                  __dirname,
                  '../utils/src'
                ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
