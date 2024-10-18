# `@gluestack-ui/nativewind-utils`

A utility function package for @gluestack-ui/nativewind

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/nativewind-utils
```

## Usage

```jsx
// import the tva
import { tva } from '@gluestack-ui/nativewind-utils/tva';

// Understanding the API
const buttonStyle = tva({
  base: 'bg-primary-500',
  variants: {
    size: {
      lg: 'w-6 h-6',
      md: 'w-5 h-5',
      sm: 'w-4 h-4',
    },
  },
});

const buttonText = tva({
  base: 'text-white',
  parentVariants: {
    size: {
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
    },
  },
});

// Using the in component
export default ({ size, ...props }) => (
  <Pressable className={buttonStyle({ size })} {...props}>
    <Text className={buttonText({ parentVariants: { size } })}>
      Hello World!
    </Text>
  </Pressable>
);
```
