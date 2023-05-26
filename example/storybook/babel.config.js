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
                ['@gluestack-style/react']: path.join(
                  __dirname,
                  '../../packages/react/src'
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
                // ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
