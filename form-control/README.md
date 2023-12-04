# @gluestack-ui/form-control

## Installation

To use `@gluestack-ui/form-control`, all you need to do is install the
`@gluestack-ui/form-control` package:

```sh
$ yarn add @gluestack-ui/form-control

# or

$ npm i @gluestack-ui/form-control
```

## Usage

By using FormControl, developers can provide important context to form elements. This context can include whether the element is invalid, disabled, or required. Here's an example how to use this package to create one:

```jsx
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from '../components/core/form-control/styled-components';
import { createFormControl } from '@gluestack-ui/form-control';
const FormControl = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});
```

## Customizing the form-control:

Default styling of all these components can be found in the components/core/form-control file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/FormControl/index.tsx) of the styled `form-control` components.

```jsx
// import the styles
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from '../components/core/form-control/styled-components';

// import the createFormControl function
import { createFormControl } from '@gluestack-ui/form-control';

// Understanding the API
const FormControl = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});

// Using the FormControl component
export default () => (
  <FormControl>
    <FormControlLabel>
      <FormControlLabelText></FormControlLabelText>
    </FormControlLabel>
    <Input />
    <FormControlHelper>
      <FormControlHelperText></FormControlHelperText>
    </FormControlHelper>
    <FormControlError>
      <FormControlErrorIcon>
        <AlerCircleIcon />
      </FormControlErrorIcon>
      <FormControlErrorText></FormControlErrorText>
    </FormControlError>
  </FormControl>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/form-control).
