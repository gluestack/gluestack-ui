import React from 'react';
import { View } from 'react-native';
import { cardStyle } from './styles';

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
