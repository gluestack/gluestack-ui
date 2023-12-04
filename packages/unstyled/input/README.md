# @gluestack-style/input

## Installation

To use `@gluestack-ui/input`, all you need to do is install the
`@gluestack-ui/input` package:

```sh
$ yarn add @gluestack-ui/input

# or

$ npm i @gluestack-ui/input
```

## Usage

The Input component is your go-to tool for gathering user input in a sleek and user-friendly text field. Whether you're designing a simple login form or a complex search feature, this component has got you covered. Here's an example how to use this package to create one:

```jsx
import { Root, Input } from '../components/core/input/styled-components';
import { createInput } from '@gluestack-ui/input';
const InputField = createInput({
  Root,
  Input,
});
```

## Customizing the input:

Default styling of all these components can be found in the components/core/input file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Input/index.tsx) of the styled `input` components.

```jsx
// import the styles
import { Root, Input } from '../components/core/input/styled-components';

// import the createInput function
import { createInput } from '@gluestack-ui/input';

//import any icon
import { searchIcon } from '@gluestack/icons';

// Understanding the API
const InputField = createInput({
  Root,
  Input,
});

// Using the input component
export default () => (
  <Input>
    <InputSlot pl="$3">
      <InputIcon as={SearchIcon} />
    </InputSlot>
    <InputInput placeholder="your text goes here..." />
  </Input>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/input).
