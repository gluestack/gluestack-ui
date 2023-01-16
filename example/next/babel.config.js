const path = require('path');
// const myBabel = require('@dank-style/babel-plugin-styled-resolver');
module.exports = {
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    process.env.NODE_ENV !== 'production'
      ? [
          'module-resolver',
          {
            alias: {
              // For development, we want to alias the library to the source
              ['@dank-style/react']: path.join(
                __dirname,
                '../../packages/react/src'
              ),
            },
          },
        ]
      : [
          'babel-plugin-transform-remove-console',
          { exclude: ['error', 'warn'] },
        ],
    // myBabel,
  ],
};
