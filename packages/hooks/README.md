# @gluestack-ui/themed

## Installation

To use gluestack-ui components, all you need to do is install the
`@gluestack-ui/themed` package:

```sh
$ yarn add @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0

# or

$ npm i @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0
```

## Usage

A button component is a graphical user interface element that enables users to act by clicking or tapping. It can be customized in size, shape, color, and behavior to fit the design of the application or website. Here's an example how to use this package to create one:

```jsx
import { useContrastText } from '@gluestack-ui/hooks';
import { View, Text } from 'react-native';
function App() {
  const color = useContrastText('#F2C0D9');
  return (
    <View
      style={{
        backgroundColor: '#F2C0D9',
      }}
    >
      <Text
        style={{
          color: color,
        }}
      >
        Hello
      </Text>
    </View>
  );
}
```

More guides on how to get started are available
[here](https://ui.gluestack.io/).
