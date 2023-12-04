# @gluestack-style/hstack

## Installation

To use `@gluestack-ui/hstack`, all you need to do is install the
`@gluestack-ui/hstack` package:

```sh
$ yarn add @gluestack-ui/hstack

# or

$ npm i @gluestack-ui/hstack
```

## Usage

HStack arranges its child elements horizontally, making it a suitable layout component for creating a row of items. It is worth noting that Row is just an alternative name for HStack. Here's an example how to use this package to create one:

```jsx
import { Root, Spacer } from '../components/core/hstack/styled-components';
import { createHStack } from '@gluestack-ui/hstack';
const HStack = createHStack({
  Root,
  Spacer,
});
```

## Customizing the hstack:

Default styling of all these components can be found in the components/core/hstack file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/HStack/index.tsx) of the styled `hstack` components.

```jsx
// import the styles
import { Root, Spacer } from '../components/core/hstack/styled-components';

// import the createHStack function
import { createHStack } from '@gluestack-ui/hstack';

// Understanding the API
const HStack = createHStack({
  Root,
  Spacer,
});

// Using the HStack component
export default () => <HStack />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/layout/hstack).
