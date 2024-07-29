import React from 'react';
import { View, ViewProps } from 'react-native';

import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { boxStyle } from './styles';

type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type IBoxProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof boxStyle>;

const Box = React.forwardRef<React.ElementRef<typeof View>, IBoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <View ref={ref} {...props} className={boxStyle({ class: className })} />
    );
  }
);

Box.displayName = 'Box';
export { Box };
