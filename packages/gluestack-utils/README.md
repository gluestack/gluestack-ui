# @gluestack-ui/utils

A collection of utility functions and hooks for gluestack-ui components.

## Installation

```sh
npm install @gluestack-ui/utils
# or
yarn add @gluestack-ui/utils
```

## Features

- Common utility functions for React and React Native
- Custom React hooks
- NativeWind utilities
- ARIA accessibility helpers

## Usage

```tsx
import {
  useControllableState,
  useKeyboardDismissable,
} from '@gluestack-ui/utils/hooks';
import { mergeRefs, stableHash } from '@gluestack-ui/utils/common';

// Use hooks
const [value, setValue] = useControllableState({
  defaultValue: 'initial',
});

// Use utility functions
const combinedRef = mergeRefs(ref1, ref2);
```

## License

MIT
