<h3 align="center">
  <a href="https://github.com/gluestack/dank-style">
    <img src="https://raw.githubusercontent.com/gluestack/ui/development/img/gluestack-logo.svg" alt="gluestack logo" width="300px">
  </a>
  <br>
  <br>
</h3>

## A library that allows you to use CSS in your React and React Native projects with a modern, powerful and flexible way. `dank-style` allows you to write CSS using JavaScript, which enables you to take advantage of the power and expressiveness of both languages. With its simple and intuitive API, you can easily create dynamic styles, responsive design, and handle themes for your applications.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://dank.style/docs website.

## Features

- **Dynamic styles:** Using JavaScript expressions, you can create dynamic styles that change based on the state of your components.

- **Server-side rendering (SSR) support:** This allows you to use the same styles on the server and the client, making it easy to implement SSR for your React applications..

- **Responsive styling::** This allows you to easily create responsive styles that adapt to different screen sizes and resolutions.

- **Theme support:** You can easily define and switch between different themes for your application, allowing for a consistent design across all pages.

- **Frequent updates:** We are constantly working on improving the library and adding new components. Follow us on GitHub to stay up-to-date on the latest releases and features.

- **Community support:** Need help using the library or have a suggestion for a new feature? Join our Discord channel to connect with the community and get support.

## Installing `dank-style`

To use `dank-style`, all you need to do is install the
`dank-style` package and its peer dependencies:

```sh
$ yarn add dank-style

# or

$ npm i dank-style
```

## Tech Stack

JavaScript, React, React Native, Styled System

## Usage

To use the `dank-style` in your project, follow these steps:

1. Wrap your application with the `StyledProvider` provided by
   **dank-style**.

```jsx
import { StyledProvider } from 'dank-style';

// Do this at the root of your application
function App({ children }) {
  return <StyledProvider>{children}</StyledProvider>;
}
```

2. Now you can use `dank-style` to style your components by using the `styled` function provided by the library. For example:

```jsx
import React from 'react';
import { styled } from 'dank-style';

const StyledButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red500',
        p: '$3',
      },
    },
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
[here](https://dank.style/).

## Contributing

We welcome contributions to the `dank-style`! If you have an idea for a new component or a bug fix, please read our [contributing guide](./CONTRIBUTING.md) instructions on how to submit a pull request.

## License

Licensed under the MIT License, Copyright © 2021 GeekyAnts. See [LICENSE](https://github.com/gluestack/dank-style/blob/master/LICENSE) for more information.
