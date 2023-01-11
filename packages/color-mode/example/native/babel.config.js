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
            ['@gluestack/ui-styled']: path.join(
              __dirname,
              '../../../styled/src'
            ),
            ['@gluestack/ui']: path.join(__dirname, '../../src'),
          },
        },
      ],
    ],
  };
};
