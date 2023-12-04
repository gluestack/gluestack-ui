# @gluestack-ui/button

## Installation

To use `@gluestack-ui/button`, all you need to do is install the
`@gluestack-ui/button` package:

```sh
$ yarn add @gluestack-ui/button

# or

$ npm i @gluestack-ui/button
```

## Usage

A button component is a graphical user interface element that enables users to act by clicking or tapping. It can be customized in size, shape, color, and behavior to fit the design of the application or website. Here's an example how to use this package to create one:

```jsx
import { createButton } from '@gluestack-ui/button';
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
} from './styled-components';

export const Button = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});
```

## Customizing the Button:

Default styling of all these components can be found in the components/core/button file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Button/index.tsx) of the styled `Button` components.

```jsx
// import the styles
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
} from '../components/core/button/styled-components';

// import the createButton function
import { createButton } from '@gluestack-ui/button';

// Understanding the API
const Button = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
});

// Using the button component
export default () => (
  <ButtonGroup>
    <Button>
      <ButtonText />
      <ButtonSpinner />
      <ButtonIcon />
    </Button>
  </ButtonGroup>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/button).
