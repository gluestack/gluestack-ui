import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { hstackStyle } from './styles';
import type { ViewProps } from 'react-native';
type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type IHStackProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof hstackStyle>;

const HStack = React.forwardRef<React.ElementRef<'div'>, IHStackProps>(
  ({ className, space, reversed, ...props }, ref) => {
    return (
      <div
        className={hstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

HStack.displayName = 'HStack';

export { HStack };
