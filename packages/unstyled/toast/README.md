# @gluestack-style/toast

## Installation

To use `@gluestack-ui/toast`, all you need to do is install the
`@gluestack-ui/toast` package:

```sh
$ yarn add @gluestack-ui/toast

# or

$ npm i @gluestack-ui/toast
```

## Usage

Toast is a component that can display alerts, notifications, or messages on top of an overlay layer. It is commonly used to inform users of important information or actions. Here's an example how to use this package to create one:

```jsx
import { Root, Title, Description } from './styled-components';
import { createToast, createToastHook } from '@gluestack-ui/toast';

export const toast = createtoast({
  Root,
  Title,
  Description,
});
```

## Customizing the toast:

Default styling of all these components can be found in the components/core/toast file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/toast/index.tsx) of the styled `toast` components.

```jsx
// import the styles
import {
  Root,
  Title,
  Description,
} from '../components/core/toast/styled-components';

// import the createtoast and createToastHook function
import { createToast, createToastHook } from '@gluestack-ui/toast';

// Understanding the API
export const toast = createtoast({
  Root,
  Title,
  Description,
});

const useToast = createToastHook(Toast);

// Using the toast component
export default () => {
  const toast = useToast();
  return (
    <Button
      {...props}
      onPress={() => {
        toast.show({
          placement: placement,
          render: ({ id }) => {
            return (
              <Toast nativeId={id}>
                <ToastTitle>Hello World Toast {id}</ToastTitle>
              </Toast>
            );
          },
        });
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/feedback/toast).
