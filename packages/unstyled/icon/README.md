# @gluestack-ui/icon

## Installation

To use `@gluestack-ui/icon`, all you need to do is install the
`@gluestack-ui/icon` package:

```sh
$ yarn add @gluestack-ui/icon

# or

$ npm i @gluestack-ui/icon
```

## Usage

Whether you're building a simple form or a complex data collection system, the icon component offers a user-friendly way for users to select multiple options from a list. Here's an example how to use this package to create one:

```jsx
import { Root } from '../components/core/icon/styled-components';
import { createIcon } from '@gluestack-ui/icon';
const Icon = createIcon({
  Root,
});
```

## Customizing the icon:

Default styling of all these components can be found in the components/core/icon file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Icons/index.tsx) of the styled `icon` components.

```jsx
// import the styles
import { Root } from '../components/core/icon/styled-components';

// import the createIcon function
import { createIcon } from '@gluestack-ui/icon';

// Understanding the API
const Icon = createIcon({
  Root,
});

// Using the icon component
export default () => <Icon />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/media-and-icons/icon).
