import React from 'react';
import { boxStyle } from './styles';
import type { ViewProps } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type IBoxProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof boxStyle>;

const Box = React.forwardRef<HTMLDivElement, IBoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={boxStyle({ class: className })} {...props} />
    );
  }
);

Box.displayName = 'Box';
export { Box };
