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
                '@gluestack-ui/range-slider': path.join(
                  __dirname,
                  '../unstyled/range-slider/src'
                ),
              },
            },
          ]
        : [
            'babel-plugin-react-docgen-typescript',
            {
              exclude: 'node_modules',
            },
          ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
