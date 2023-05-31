# @gluestack-style/babel-plugin-styled-resolver

## Installation

To use `@gluestack-style/babel-plugin-styled-resolver`, all you need to do is install the
`@gluestack-style/babel-plugin-styled-resolver` package and its peer dependencies:

```sh
$ yarn add @gluestack-style/babel-plugin-styled-resolver

# or

$ npm i @gluestack-style/babel-plugin-styled-resolver
```

## Usage

Add Babel plugin to your app `babel.config.js`.

```jsx
const path = require('path');
const gluestackStyleResolver = require('@gluestack-style/babel-plugin-styled-resolver');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [gluestackStyleResolver],
  };
};
```

Just make sure your babel.config.js and gluestack-style.config.js/ts are in the same directory. We suggest you keep both of them at the root of your app codebase.

More guides on how to get started are available
[here](https://style.gluestack.io/).
