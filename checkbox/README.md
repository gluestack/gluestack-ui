# @gluestack-ui/checkbox

## Installation

To use `@gluestack-ui/checkbox`, all you need to do is install the
`@gluestack-ui/checkbox` package:

```sh
$ yarn add @gluestack-ui/checkbox

# or

$ npm i @gluestack-ui/checkbox
```

## Usage

Whether you're building a simple form or a complex data collection system, the Checkbox component offers a user-friendly way for users to select multiple options from a list. Here's an example how to use this package to create one:

```jsx
import { Root, Indicator, Icon, Label, Group } from './styled-components';
import { createCheckbox } from '@gluestack-ui/checkbox';

export const Checkbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});
```

## Customizing the checkbox:

Default styling of all these components can be found in the components/core/checkbox file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Checkbox/index.tsx) of the styled `Checkbox` components.

```jsx
// import the styles
import {
  Root,
  Indicator,
  Icon,
  Label,
  Group,
} from '../components/core/checkbox/styled-components';

// import the createCheckbox function
import { createCheckbox } from '@gluestack-ui/checkbox';

// Understanding the API
const Checkbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

// Using the checkbox component
export default () => (
  <CheckboxGroup>
    <Checkbox>
      <CheckboxIndicator>
        <CheckboxIcon />
      </CheckboxIndicator>
      <CheckboxLabel />
    </Checkbox>
  </CheckboxGroup>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/checkbox).
