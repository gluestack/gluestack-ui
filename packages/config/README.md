# @gluestack-ui/config

## Installation

To use `@gluestack-ui/config`, all you need to do is install the
`@gluestack-ui/config` package:

```sh
$ yarn add @gluestack-ui/config

# or

$ npm i @gluestack-ui/config
```

## Usage

A button component is a graphical user interface element that enables users to act by clicking or tapping. It can be customized in size, shape, color, and behavior to fit the design of the application or website. Here's an example how to use this package to create one:

```jsx
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@@gluestack-ui/config';

function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* Your code goes here*/}
    </GluestackUIProvider>
  );
}
```

More guides on how to get started are available
[here](https://gluestack.io/ui/docs/core-concepts/themed-library).
