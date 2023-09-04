const myBabel = require('../../packages/babel-plugin-styled-resolver/src/index.js');
const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // process.env.NODE_ENV === "production" ? myBabel : {},
      [myBabel, { filename: '../../packages/react/src/index' }],
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
          },
        },
      ],
      // 'transform-remove-console',
    ],
  };
};
