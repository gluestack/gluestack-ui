# gluestack-ui (beta)

<h3 align="center">
  <a href="https://github.com/gluestack/gluestack-ui">
    <img src="https://raw.githubusercontent.com/gluestack/gluestack-ui/main/img/gluestack-ui-banner.svg" alt="gluestack-ui logo" >
  </a>
  <br>
</h3>

## Introduction

**gluestack-ui** is a universal UI library that provides optionally styled and accessible components. These components are designed for easy integration into applications developed with React and React Native.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://ui.gluestack.io/docs website.

## Features

- **Customizable components:** Each component in the library comes with a set of customizable props that allow you to tailor its appearance and behavior to your specific needs.

- **Responsive design:** The components are built using modern web design principles and are fully responsive, so they work seamlessly across a wide range of devices and screen sizes.

- **Well-documented:** The comes with comprehensive documentation for each component, including a list of props and examples, to help you get up and running quickly.

- **Easy to use:** The components are designed to be easy to use and integrate into your existing React applications. Simply install the library and import the components you need.

- **Frequent updates:** We are constantly working on improving the library and adding new components. Follow us on GitHub to stay up-to-date on the latest releases and features.

- **Community support:** Need help using the library or have a suggestion for a new feature? Join our [Discord](https://discord.com/invite/95qQ84nf6f) channel to connect with the community and get support.

## Installing **gluestack-ui**

To use gluestack-ui components, all you need to install `@gluestack-ui/themed` and its dependencies

```bash
npm i @gluestack-ui/themed react-native-svg@13.4.0
```

## Tech Stack

JavaScript, React, React Native, Styled System

## Usage

To use the `gluestack-ui` in your project, follow these steps:

1. Wrap your application with the `GluestackUIProvider` provided by
   **@gluestack-ui/themed**.

```jsx
import { GluestackUIProvider } from '@gluestack-ui/themed';

// Write this code snippet at the root of your application
function App({ children }) {
  return <GluestackUIProvider>{children}</GluestackUIProvider>;
}
```

2. Now you can start using components!:

```jsx
import { Button, ButtonText } from '@gluestack-ui/themed';

function Example() {
  return (
    <Button>
      <ButtonText>Awesome Button!</ButtonText>
    </Button>
  );
}
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs).

## Contributing

We welcome contributions to the `gluestack-ui`. If you have an idea for a new component or a bug fix, please read our [contributing guide](./CONTRIBUTING.md) instructions on how to submit a pull request.

## License

Licensed under the MIT License, Copyright © 2023 GeekyAnts. See [LICENSE](https://github.com/gluestack/ui/blob/master/LICENSE) for more information.
