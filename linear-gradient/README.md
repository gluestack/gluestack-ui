# @gluestack-ui/linear-gradient

## Installation

To use `@gluestack-ui/linear-gradient`, all you need to do is install the
`@gluestack-ui/linear-gradient` package:

```sh
$ yarn add @gluestack-ui/linear-gradient

# or

$ npm i @gluestack-ui/linear-gradient
```

## Usage

A linear-gradient component is a graphical user interface element that enables users to act by clicking or tapping. It can be customized in size, shape, color, and behavior to fit the design of the application or website. Here's an example how to use this package to create one:

```jsx
import { createLinearGradient } from '@gluestack-ui/linear-gradient';
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
} from './styled-components';

export const LinearGradient = createLinearGradient({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});
```

## Customizing the LinearGradient:

Default styling of all these components can be found in the components/core/linear-gradient file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/LinearGradient/index.tsx) of the styled `LinearGradient` components.

```jsx
// import the styles
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
} from '../components/core/linear-gradient/styled-components';

// import the createLinearGradient function
import { createLinearGradient } from '@gluestack-ui/linear-gradient';

// Understanding the API
const LinearGradient = createLinearGradient({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
});

// Using the linear-gradient component
export default () => (
  <LinearGradientGroup>
    <LinearGradient>
      <LinearGradientText />
      <LinearGradientSpinner />
      <LinearGradientIcon />
    </LinearGradient>
  </LinearGradientGroup>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/linear-gradient).
