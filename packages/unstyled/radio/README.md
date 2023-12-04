# @gluestack-ui/radio

## Installation

To use `@gluestack-ui/radio`, all you need to do is install the
`@gluestack-ui/radio` package:

```sh
$ yarn add @gluestack-ui/radio

# or

$ npm i @gluestack-ui/radio
```

## Usage

The Radio component presents users with predefined choices and enables them to select only one option. It is commonly used for providing a single-choice selection in forms or surveys. Here's an example how to use this package to create one:

```jsx
import { Root, Group, Icon, Indicator, Label } from './styled-components';
import { createRadio } from '@gluestack-ui/radio';

export const Radio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});
```

## Customizing the Radio:

Default styling of all these components can be found in the components/core/radio file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Radio/index.tsx) of the styled `Radio` components.

```jsx
// import the styles
import {
  Root,
  Indicator,
  Icon,
  Label,
  Group,
} from '../components/core/radio/styled-components';

// import the createRadio function
import { createRadio } from '@gluestack-ui/radio';

// Understanding the API
const Radio = createRadio({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

// Using the radio component
export default () => (
  <RadioGroup>
    <Radio>
      <RadioIndicator>
        <RadioIcon as={CircleIcon} />
      </RadioIndicator>
      <RadioLabel />
    </Radio>
  </RadioGroup>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/radio).
