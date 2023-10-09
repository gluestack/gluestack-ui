const path = require('path');
console.log('herher');
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
                  '../../packages/themed/src'
                ),
                '@gluestack-ui/config': path.join(
                  __dirname,
                  '../../packages/config/src/gluestack-ui.config'
                ),
                // '@gluestack-style/react': path.join(
                //   __dirname,
                //   '../../../dank-style/packages/react/src'
                // ),
                // '@gluestack-style/animation-resolver': path.join(
                //   __dirname,
                //   '../../../dank-style/packages/animation-resolver/src'
                // ),
                // '@gluestack-style/legend-motion-animation-driver': path.join(
                //   __dirname,
                //   '../../../dank-style/packages/animation-legend-motion-driver/src'
                // ),
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
