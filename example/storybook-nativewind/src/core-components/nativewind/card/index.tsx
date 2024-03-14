import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';
import { View } from 'react-native';

const cardStyle = tva({
  variants: {
    size: {
      sm: 'p-3 rounded',
      md: 'p-4 rounded-md',
      lg: 'p-6 rounded-xl',
    },
    variant: {
      elevated: 'bg-background-0',
      outline: 'border border-outline-200 ',
      ghost: 'rounded-none',
      filled: 'bg-background-50',
    },
  },
});

const Card = ({
  className,
  size = 'md',
  variant = 'elevated',
  ...props
}: any) => {
  return (
    <View
      className={cardStyle({ size, variant, class: className })}
      {...props}
    />
  );
};

Card.displayName = 'Card';

export { Card };
