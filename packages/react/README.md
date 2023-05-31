# @gluestack-style/react

## Installation

To use `@gluestack-style/react`, all you need to do is install the
`@gluestack-style/react` package and its peer dependencies:

```sh
$ yarn add @gluestack-style/react

# or

$ npm i @gluestack-style/react
```

## Usage

To use the `@gluestack-style/react` in your project, follow these steps:

1. Wrap your application with the `StyledProvider` provided by
   **@gluestack-style/react**.

```jsx
import { StyledProvider } from '@gluestack-style/react';

// Do this at the root of your application
function App({ children }) {
  return <StyledProvider>{children}</StyledProvider>;
}
```

1. Now you can use `@gluestack-style/react` to style your components by using the `styled` function provided by the library. For example:

```jsx
import React from 'react';
import { styled } from '@gluestack-style/react';

const StyledButton = styled(
  Pressable,
  {
    bg: '$red500',
    p: '$3',
  },
  {}
);

const StyledButtonText = styled(Text, {}, {});

export const App = () => {
  return (
    <StyledProvider>
      <StyledButton>
        <StyledButtonText>Button</StyledButtonText>
      </StyledButton>
    </StyledProvider>
  );
};
```

More guides on how to get started are available
[here](https://style.gluestack.io/).
