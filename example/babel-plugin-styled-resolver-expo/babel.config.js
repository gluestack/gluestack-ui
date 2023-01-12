const path = require('path');
const myBabel = require('../../packages/babel-plugin-styled-resolver/src/index.js');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // process.env.NODE_ENV === "production" ? myBabel : {},
      myBabel,
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            // ['@dank-style/react']: path.join(
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
