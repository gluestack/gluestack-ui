import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { View } from 'react-native';
import { cardStyle } from './styles';

type ICardProps = React.ComponentProps<typeof View> &
  VariantProps<typeof cardStyle>;

const Card = React.forwardRef(
  (
    { className, size = 'md', variant = 'elevated', ...props }: ICardProps,
    ref?: any
  ) => {
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
