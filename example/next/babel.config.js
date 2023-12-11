const path = require('path');
module.exports = {
  presets: ['next/babel'],
  plugins: [
    // ['@babel/plugin-proposal-private-methods'],
    // ['@babel/plugin-proposal-private-property-in-object'],
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
