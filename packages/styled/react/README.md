<h3 align="center">
  <a href="https://github.com/gluestack/gluestack-style">
    <img src="https://raw.githubusercontent.com/gluestack/gluestack-style/main/img/gluestack-logo.svg" alt="gluestack logo">
  </a>
  <br>
  <br>
</h3>

## A library that allows you to use CSS in your React and React Native projects with a modern, powerful and flexible way. `gluestack-style` allows you to write CSS using JavaScript, which enables you to take advantage of the power and expressiveness of both languages. With its simple and intuitive API, you can easily create dynamic styles, responsive design, and handle themes for your applications.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://gluestack.io/style/docs/getting-started/installation website.

## Installation

To use `@gluestack-style/react`, all you need to do is install the
`@gluestack-style/react` package and its peer dependencies:

```sh
$ yarn add @gluestack-style/react react-native-web react-native-svg

# or

$ npm i @gluestack-style/react react-native-web react-native-svg
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
[here](https://gluestack.io/style).
