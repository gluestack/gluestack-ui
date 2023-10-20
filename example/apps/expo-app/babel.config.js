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
                '@gluestack-ui/themed': path.join(
                  __dirname,
                  '../../../packages/themed/src'
                ),
                '@gluestack-ui/config': path.join(
                  __dirname,
                  '../../../packages/config/src/gluestack-ui.config'
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
function getAliases() {
  return {
    // For development, we want to alias the library to the source
    '@gluestack-ui/themed': path.join(__dirname, '../../packages/themed/src'),
    '@gluestack-ui/config': path.join(
      __dirname,
      '../../packages/config/src/gliesstack-ui.config'
    ),
  };
}
