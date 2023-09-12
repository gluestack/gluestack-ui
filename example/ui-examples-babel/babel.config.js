const myBabel = require('../../packages/babel-plugin-styled-resolver/src/index.js');
const path = require('path');
// process.env.GLUESTACK_STYLE_TARGET = 'native';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        myBabel,
        {
          configPath: path.join(__dirname, './gluestack-ui.config.ts'),
          configThemePath: ['theme'],
          styled: [
            // '@gluestack-style/react',
            path.join(__dirname, '../../packages/react/src'),
          ],
          // components: ['@gluesatck-ui/themed'],
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            ['@gluestack-style/react']: path.join(
              __dirname,
              '../../packages/react/src'
            ),
            // ['@gluestack-style/animation-plugin']: path.join(
            //   __dirname,
            //   '../../packages/animation-plugin/src'
            // ),
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
            // ),
          },
        },
      ],
    ],
  };
};
