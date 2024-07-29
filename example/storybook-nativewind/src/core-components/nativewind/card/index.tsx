import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { View, ViewProps } from 'react-native';
import { cardStyle } from './styles';

type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type ICardProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof cardStyle>;

const Card = React.forwardRef<React.ElementRef<typeof View>, ICardProps>(
  ({ className, size = 'md', variant = 'elevated', ...props }, ref) => {
    return (
      <View
        className={cardStyle({ size, variant, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };
