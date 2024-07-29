import { View, ViewProps } from 'react-native';
import React from 'react';
import { centerStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type ICenterProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof centerStyle>;

const Center = React.forwardRef<React.ElementRef<typeof View>, ICenterProps>(
  ({ className, ...props }, ref) => {
    return (
      <View
        className={centerStyle({ class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

Center.displayName = 'Center';

export { Center };
