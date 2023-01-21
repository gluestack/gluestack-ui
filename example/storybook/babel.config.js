const path = require('path');

console.log('babel config :::::');
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
                ['@universa11y/button']: path.join(
                  __dirname,
                  '../../packages/button/src'
                ),
                ['@universa11y/vstack']: path.join(
                  __dirname,
                  '../../packages/vstack/src'
                ),
                ['@universa11y/tooltip']: path.join(
                  __dirname,
                  '../../packages/tooltip/src'
                ),
                ['@universa11y/provider']: path.join(
                  __dirname,
                  '../../packages/provider/src'
                ),
                ['@universa11y/text-area']: path.join(
                  __dirname,
                  '../../packages/text-area/src'
                ),
                ['@universa11y/input']: path.join(
                  __dirname,
                  '../../packages/input/src'
                ),
                ['@universa11y/switch']: path.join(
                  __dirname,
                  '../../packages/switch/src'
                ),
                ['@universa11y/alert']: path.join(
                  __dirname,
                  '../../packages/alert/src'
                ),
                ['@universa11y/avatar']: path.join(
                  __dirname,
                  '../../packages/avatar/src'
                ),
                ['@universa11y/badge']: path.join(
                  __dirname,
                  '../../packages/badge/src'
                ),
                ['@universa11y/box']: path.join(
                  __dirname,
                  '../../packages/box/src'
                ),
                ['@universa11y/center']: path.join(
                  __dirname,
                  '../../packages/center/src'
                ),
                ['@universa11y/checkbox']: path.join(
                  __dirname,
                  '../../packages/checkbox/src'
                ),
                ['@universa11y/divider']: path.join(
                  __dirname,
                  '../../packages/divider/src'
                ),
                ['@universa11y/heading']: path.join(
                  __dirname,
                  '../../packages/heading/src'
                ),
                ['@universa11y/hstack']: path.join(
                  __dirname,
                  '../../packages/hstack/src'
                ),

                // ['@universa11y/button']: path.join(
                //   __dirname,
                //   '../../packages/button/src'
                // ),
                // ['@universa11y/actionsheet']: path.join(
                //   __dirname,
                //   '../../packages/actionsheet/src'
                // ),
                // ['@universa11y/transitions']: path.join(
                //   __dirname,
                //   '../../packages/transitions/src'
                // ),
                // ['@universa11y/react-native-aria']: path.join(
                //   __dirname,
                //   '../../packages/react-native-aria/src'
                // ),
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
