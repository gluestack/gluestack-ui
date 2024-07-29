import React from 'react';
import { cardStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import type { ViewProps } from 'react-native';

type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type ICardProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof cardStyle>;

const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ className, size = 'md', variant = 'elevated', ...props }, ref) => {
    return (
      <div
        className={cardStyle({ size, variant, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };
