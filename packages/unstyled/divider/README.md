# @gluestack-ui/divider

## Installation

To use `@gluestack-ui/divider`, all you need to do is install the
`@gluestack-ui/divider` package:

```sh
$ yarn add @gluestack-ui/divider

# or

$ npm i @gluestack-ui/divider
```

## Usage

Revamp your content organization with the Divider component! Use it to visually separate different sections of a list or group for a more structured and easy-to-read interface. Here's an example how to use this package to create one:

```jsx
import Root from './styled-components/Root';
import { createDivider } from '@gluestack-ui/divider';
export const Divider = createDivider({ Root });
```

## Customizing the Divider:

Default styling of all these components can be found in the components/core/divider file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Divider/index.tsx) of the styled `Divider` components.

```jsx
// import the styles
import { Root } from '../components/core/divider/styled-components';

// import the createDivider function
import { createDivider } from '@gluestack-ui/divider';

// Understanding the API
const Divider = createDivider({
  Root,
});

// Using the Divider component
export default () => <Divider />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/data-display/divider).
