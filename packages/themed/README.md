# @gluestack-ui/themed

## Introduction

**gluestack-ui** is a universal UI library that provides optionally styled and accessible components. These components are designed for easy integration into applications developed with React and React Native.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://v1.gluestack.io/ui/docs website.

## Features

- **Dynamic styles:** Using JavaScript expressions, you can create dynamic styles that change based on the state of your components.

- **Server-side rendering (SSR) support:** This allows you to use the same styles on the server and the client, making it easy to implement SSR for your React applications..

- **Responsive styling::** This allows you to easily create responsive styles that adapt to different screen sizes and resolutions.

- **Theme support:** You can easily define and switch between different themes for your application, allowing for a consistent design across all pages.

- **Frequent updates:** We are constantly working on improving the library and adding new components. Follow us on GitHub to stay up-to-date on the latest releases and features.

- **Community support:** Need help using the library or have a suggestion for a new feature? Join our [Discord](https://discord.com/invite/95qQ84nf6f) channel to connect with the community and get support.

## Installing **gluestack-ui**

To use gluestack-ui components, all you need to install `@gluestack-ui/themed` and its dependencies

```bash
npm i @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0
```

## Tech Stack

JavaScript, React, React Native, Styled System

## Usage

To use the `gluestack-ui` in your project, follow these steps:

1. Wrap your application with the `GluestackUIProvider` provided by
   **@gluestack-ui/themed**.

```jsx
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

// Write this code snippet at the root of your application
function App({ children }) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
```

2. Now you can use `@gluestack-style/react` to style your components by using the `styled` function provided by the library. For example:

```jsx
import { Button, ButtonText } from '@gluestack-ui/themed';

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
    <Button>
      <ButtonText>Awesome Button!</ButtonText>
    </Button>
  );
};
```

More guides on how to get started are available
[here](https://v1.gluestack.io/).
