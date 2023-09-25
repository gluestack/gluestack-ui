const path = require('path');
console.log('\n Hello ***********');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              '@gluestack-ui/themed': path.join(
                __dirname,
                '../../packages/themed/src'
              ),
            },
          ]
        : [
            'babel-plugin-react-docgen-typescript',
            {
              exclude: 'node_modules',
            },
          ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
