# gluestack-ui (alpha)

<h3 align="center">
  <a href="https://github.com/gluestack/gluestack-ui">
    <img src="https://raw.githubusercontent.com/gluestack/gluestack-ui/main/img/gluestack-ui-banner.svg" alt="gluestack-ui logo" >
  </a>
  <br>
</h3>

## `gluestack-ui` is a universal UI library that provides optionally styled and accessible components. These components are designed for easy integration into applications developed with React and React Native.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://ui.gluestack.io/docs website.

## Features

- **Customizable components:** Each component in the library comes with a set of customizable props that allow you to tailor its appearance and behavior to your specific needs.

- **Responsive design:** The components are built using modern web design principles and are fully responsive, so they work seamlessly across a wide range of devices and screen sizes.

- **Well-documented:** The comes with comprehensive documentation for each component, including a list of props and examples, to help you get up and running quickly.

- **Easy to use:** The components are designed to be easy to use and integrate into your existing React applications. Simply install the library and import the components you need.

- **Frequent updates:** We are constantly working on improving the library and adding new components. Follow us on GitHub to stay up-to-date on the latest releases and features.

- **Community support:** Need help using the library or have a suggestion for a new feature? Join our [Discord](https://discord.com/invite/95qQ84nf6f) channel to connect with the community and get support.

## Installing `gluestack-ui`

To use gluestack-ui components, all you need to do is install the
particular component that you want to use.

Here's how you can add `Button` package in your project.

```jsx
npx gluestack-ui@latest add button
```

- Check if gluestack-ui is installed in project, if not it will create a gluestack-ui.config.ts file which will have default theme.
- It will create `GluestackUIProvider` (Wrapper component)
- It will also install the required styled library (@glue-style/react) dependency and button package ( @gluestack-ui/button )

## Tech Stack

JavaScript, React, React Native, Styled System

## Usage

To use the `gluestack-ui` in your project, follow these steps:

1. Wrap your application with the `GluestackUIProvider` provided by
   **@gluestack-ui**.

```jsx
import { GluestackUIProvider } from './components';
import { config } from './gluestack-ui.config';

// Write this code snippet at the root of your application
function App({ children }) {
  return (
    <GluestackUIProvider config={config.theme}>{children}</GluestackUIProvider>
  );
}
```

2. Now you can start using components!:

```jsx
import { Button } from './components';

function Example() {
  return (
    <Button>
      <Button.Text>Awesome Button!</Button.Text>
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
