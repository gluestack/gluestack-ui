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
                ['@universa11y/radio']: path.join(
                  __dirname,
                  '../../packages/radio/src'
                ),
                ['@universa11y/icon']: path.join(
                  __dirname,
                  '../../packages/icon/src'
                ),
                ['@universa11y/spinner']: path.join(
                  __dirname,
                  '../../packages/spinner/src'
                ),
                ['@universa11y/slider']: path.join(
                  __dirname,
                  '../../packages/slider/src'
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
                ['@universa11y/progress']: path.join(
                  __dirname,
                  '../../packages/progress/src'
                ),
                ['@universa11y/menu']: path.join(
                  __dirname,
                  '../../packages/menu/src'
                ),
                ['@universa11y/image']: path.join(
                  __dirname,
                  '../../packages/image/src'
                ),
                ['@universa11y/link']: path.join(
                  __dirname,
                  '../../packages/link/src'
                ),
                ['@universa11y/text']: path.join(
                  __dirname,
                  '../../packages/text/src'
                ),
                ['@universa11y/linear-gradient']: path.join(
                  __dirname,
                  '../../packages/linear-gradient/src'
                ),
                ['@universa11y/icon']: path.join(
                  __dirname,
                  '../../packages/icon/src'
                ),
                ['@universa11y/form-control']: path.join(
                  __dirname,
                  '../../packages/form-control/src'
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
