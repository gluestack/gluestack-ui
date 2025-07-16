# @gluestack-ui-nightly/utils

A collection of utility functions and hooks for gluestack-ui components.

## Installation

```sh
npm install @gluestack-ui-nightly/utils
# or
yarn add @gluestack-ui-nightly/utils
```

## Features

- Common utility functions for React and React Native
- Custom React hooks
- NativeWind utilities
- ARIA accessibility helpers

## Usage

```tsx
import { useControllableState, useKeyboardDismissable } from '@gluestack-ui-nightly/utils/hooks';
import { mergeRefs, stableHash } from '@gluestack-ui-nightly/utils/common';

// Use hooks
const [value, setValue] = useControllableState({
  defaultValue: 'initial',
});

// Use utility functions
const combinedRef = mergeRefs(ref1, ref2);
```

## License

MIT 