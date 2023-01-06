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
                // For development, we want to alias the library to the source
                ['@gluestack/ui-styled']: path.join(
                  __dirname,
                  '../../src/index'
                ),
                ['@gluestack/design-system']: path.join(
                  __dirname,
                  '../../../../glustack-design-system/src/index'
                ),
                // ['@gluestack/color-mode']: path.join(
                //   __dirname,
                //   '../../color-mode/src'
                // ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
