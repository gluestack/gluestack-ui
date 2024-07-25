import React from 'react';
import { centerStyle } from './styles';

import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import type { ViewProps } from 'react-native';
type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type ICenterProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof centerStyle>;

const Center = React.forwardRef<HTMLDivElement, ICenterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={centerStyle({ class: className })} {...props} ref={ref} />
    );
  }
);

Center.displayName = 'Center';

export { Center };
