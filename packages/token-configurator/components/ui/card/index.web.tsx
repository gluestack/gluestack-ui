import React from 'react';
import { cardStyle } from './styles';

const Card = ({
  className,
  size = 'md',
  variant = 'elevated',
  ...props
}: any) => {
  return (
    <div
      className={cardStyle({ size, variant, class: className })}
      {...props}
    />
  );
};

Card.displayName = 'Card';

export { Card };
