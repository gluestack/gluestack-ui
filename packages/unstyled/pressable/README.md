# @gluestack-ui/pressable

## Installation

To use `@gluestack-ui/pressable`, all you need to do is install the
`@gluestack-ui/pressable` package:

```sh
$ yarn add @gluestack-ui/pressable

# or

$ npm i @gluestack-ui/pressable
```

## Usage

By providing access to hover, pressed, and focus events, Pressable serves as a more flexible alternative to buttons at a lower level of abstraction. It is a useful primitive for advanced customization needs. Here's an example how to use this package to create one:

```jsx
import Root from './Root';
import { createPressable } from '@gluestack-ui/pressable';
export const Pressable = createPressable({ Root });
```

## Customizing the Pressable:

Default styling of all these components can be found in the components/core/pressable file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Pressable/index.tsx) of the styled `Pressable` components.

```jsx
// import the styles
import { Root } from '../components/core/pressable/styled-components';

// mapping the Pressable to root component
const Pressable = Root;

// using the Pressable component
export default () => (
  <Pressable>
    <Text />
  </Pressable>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/pressable).
