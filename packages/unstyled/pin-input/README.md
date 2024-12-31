# @gluestack-style/input

## Installation

To use `@gluestack-ui/input`, all you need to do is install the
`@gluestack-ui/input` package:

```sh
$ yarn add @gluestack-ui/pin-input

# or

$ npm i @gluestack-ui/pin-input
```

## Usage

The Input component is your go-to tool for gathering user input in a sleek and user-friendly text field. Whether you're designing a simple login form or a complex search feature, this component has got you covered. Here's an example how to use this package to create one:

```jsx
import { View, TextInput } from 'react-native';
import { createPinInput } from '@gluestack-ui/pin-input';
const PinInputRoot = createPinInput({
  Root: View,
  Input: TextInput,
});
```

## Customizing the input:

Default styling of all these components can be found in the components/core/input file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Input/index.tsx) of the styled `input` components.

```jsx
import { View, TextInput } from 'react-native';

// import the createPinInput function
import { createPinInput } from '@gluestack-ui/pin-input';

// Understanding the API
const PinInputField = createPinInput({
  Root: View,
  Input: TextInput,
});

// Using the input component
export default () => (
  <PinInputField>
    <PinInputFieldInput />
  </PinInputField>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/pin-input).
