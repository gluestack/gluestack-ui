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
                ['@gluestack-ui/overlay']: path.resolve(
                  __dirname,
                  '../packages/overlay/src'
                ),
                // ['@gluestack-ui/utils']: path.resolve(__dirname, '../utils/src'),
                // ['@gluestack-ui/hooks']: path.resolve(__dirname, '../hooks/src'),
                // ['@gluestack-ui/overlay']: path.resolve(
                //   __dirname,
                //   '../overlay/src'
                // ),
                // ['@gluestack-ui/icon']: path.resolve(__dirname, '../icon/src'),
                // ['@gluestack-ui/transitions']: path.resolve(
                //   __dirname,
                //   '../transitions/src'
                // ),
                // For development, we want to alias the library to the source
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
