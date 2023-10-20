# @gluestack-ui/hooks

## Installation

To use gluestack-ui hooks, all you need to do is install the
`@gluestack-ui/hooks` package:

```sh
$ yarn add @gluestack-ui/hooks

# or

$ npm i @gluestack-ui/hooks
```

## Usage

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
