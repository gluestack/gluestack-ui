# @gluestack-style/pin-input

## Installation

To use `@gluestack-ui/pin-input`, all you need to do is install the
`@gluestack-ui/pin-input` package:

```sh
$ yarn add @gluestack-ui/pin-input

# or

$ npm i @gluestack-ui/pin-input
```

## Usage

The PinInput component is specifically designed for capturing One-Time Passwords (OTPs) in a user-friendly and secure manner. It's perfect for implementing OTP verification in your application, ensuring a smooth user experience. Here's an example of how to use this package to create an OTP input field:

```jsx
import { View, TextInput } from 'react-native';
import { createPinInput } from '@gluestack-ui/pin-input';
const PinInputRoot = createPinInput({
  Root: View,
  Input: TextInput,
});
```

## Customizing the pin-input:

Default styling of all these components can be found in the components/core/pin-input file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/PinInput/index.tsx) of the styled `pin-input` components.

```jsx
import { View, TextInput } from 'react-native';

// import the createPinInput function
import { createPinInput } from '@gluestack-ui/pin-input';

// Understanding the API
const PinInputField = createPinInput({
  Root: View,
  Input: TextInput,
});

// Using the pin-input component
export default () => (
  <PinInputField>
    <PinInputFieldInput />
  </PinInputField>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/pin-input).
