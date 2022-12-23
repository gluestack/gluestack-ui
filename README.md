# <img src="https://raw.githubusercontent.com/gluestack/ui/master/img/logo.png" alt="gluestack/ui logo">

## `gluestack/ui` provides a collection of accessible, customizable and reusable components for building user interfaces with React And React Native.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://gluestack.io/docs website.

## Features

- **Customizable components:** Each component in the library comes with a set of customizable props that allow you to tailor its appearance and behavior to your specific needs.

- **Responsive design:** The components are built using modern web design principles and are fully responsive, so they work seamlessly across a wide range of devices and screen sizes.

- **Well-documented:** The comes with comprehensive documentation for each component, including a list of props and examples, to help you get up and running quickly.

- **Easy to use:** The components are designed to be easy to use and integrate into your existing React applications. Simply install the library and import the components you need.

- **Frequent updates:** We are constantly working on improving the library and adding new components. Follow us on GitHub to stay up-to-date on the latest releases and features.

- **Community support:** Need help using the library or have a suggestion for a new feature? Join our Discord channel to connect with the community and get support.

## Installing `gluestack/ui`

To use gluestack/ui components, all you need to do is install the
`@gluestack/ui` package and its peer dependencies:

```sh
$ yarn add @gluestack/ui @gluestack/ui-styled @gluestack/ui-creator

# or

$ npm i @gluestack/ui @gluestack/ui-styled @gluestack/ui-creator
```

## Tech Stack

JavaScript, React, React Native, Styled System

## Usage

To use the `gluestack/ui` in your project, follow these steps:

1. Wrap your application with the `UIProvider` provided by
   **@glustack/ui**.

```jsx
import { GluestackUIProvider } from '@glustack/ui';

// Do this at the root of your application
function App({ children }) {
  return <GluestackUIProvider>{children}</GluestackUIProvider>;
}
```

2. Now you can start using components!:

```jsx
import { Button } from '@gluestack/ui';

function Example() {
  return (
    <Button>
      <Button.Text>Awesome Button!</Button.Text>
    </Button>
  );
}
```

More guides on how to get started are available
[here](https://gluestack.io/).

## Contributing

We welcome contributions to the `gluestack/ui`! If you have an idea for a new component or a bug fix, please read our [contributing guide](./CONTRIBUTING.md) instructions on how to submit a pull request.

## License

Licensed under the MIT License, Copyright © 2021 GeekyAnts. See [LICENSE](https://github.com/gluestack/ui/blob/master/LICENSE) for more information.
