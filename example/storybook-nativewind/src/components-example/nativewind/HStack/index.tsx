import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';
import { View } from 'react-native';

const hstackStyle = tva({
  base: 'flex-row',
  variants: {
    space: {
      'xs': 'gap-1',
      'sm': 'gap-2',
      'md': 'gap-3',
      'lg': 'gap-4',
      'xl': 'gap-5',
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
    },
    reversed: {
      true: 'flex-row-reverse',
    },
  },
});

const HStack = ({ className, space, reversed, ...props }: any) => {
  return (
    <View
      className={hstackStyle({ space, reversed, class: className })}
      {...props}
    />
  );
};

HStack.displayName = 'HStack';

export { HStack };
