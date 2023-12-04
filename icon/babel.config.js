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
                ['@gluestack-ui/utils']: path.resolve(
                  __dirname,
                  '../utils/src'
                ),
                ['@gluestack-ui/provider']: path.resolve(
                  __dirname,
                  '../provider/src'
                ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
