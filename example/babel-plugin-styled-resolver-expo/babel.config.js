const path = require('path');
const myBabel = require('../../packages/babel-plugin-styled-resolver/src/index.js');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // process.env.NODE_ENV === "production" ? myBabel : {},
      [
        myBabel,
        {
          web: true,
          configPath: path.join(__dirname, './src/styled.config.ts'),
          configThemePath: ['config', 'theme'],
          // libraryName: '../../styled',
          // filename: path.join(__dirname, './core/styled'),
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            // ['@gluestack-style/react']: path.join(
            //   __dirname,
            //   '../../../styled/src/index'
            // ),
          },
        },
      ],
      // 'transform-remove-console',
    ],
  };
};
