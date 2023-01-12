const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            ['@dank-style/cssify']: path.join(__dirname, '../../src'),
            ['@dank-style/template']: path.join(__dirname, '../../src'),
          },
        },
      ],
    ],
  };
};
