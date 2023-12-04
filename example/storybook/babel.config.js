const path = require('path');
<<<<<<< HEAD
console.log('herher');
=======

>>>>>>> source-gluestack-style
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
<<<<<<< HEAD
=======
      'react-native-reanimated/plugin',
>>>>>>> source-gluestack-style
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
<<<<<<< HEAD
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
=======
                // For development, we want to alias the library to the source
                ['@gluestack-style/react']: path.join(
                  __dirname,
                  '../../packages/react/src'
                ),
                ['@gluestack-style/legend-motion-animation-driver']: path.join(
                  __dirname,
                  '../../packages/animation-legend-motion-driver/src'
                ),
                ['@gluestack-style/moti-driver']: path.join(
                  __dirname,
                  '../../packages/animation-moti-animation-driver/src'
                ),
                ['@gluestack-style/animation-resolver']: path.join(
                  __dirname,
                  '../../packages/animation-resolver/src'
                ),
                // ['@dank-style/react']: path.join(
                //   __dirname,
                //   '../../packages/react/src'
                // ),
                // ['@gluestack-style/animation-plugin']: path.join(
                //   __dirname,
                //   '../../packages/animation-plugin/src'
                // ),
                // ['@dank-style/animation-plugin']: path.join(
                //   __dirname,
                //   '../../packages/animation-plugin/src'
>>>>>>> source-gluestack-style
                // ),
              },
            },
          ]
<<<<<<< HEAD
        : [
            'babel-plugin-react-docgen-typescript',
            {
              exclude: 'node_modules',
            },
          ],
=======
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
>>>>>>> source-gluestack-style
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
