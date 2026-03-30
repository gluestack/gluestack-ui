import React from 'react';
import { cardStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

type ICardProps = React.ComponentPropsWithoutRef<'div'> & 
  VariantProps<typeof cardStyle> & { 
    className?: string;
    size?: 'default' | 'sm';
    testID?: string;
  };

const Card = React.forwardRef<HTMLDivElement, ICardProps>(function Card(
  { className, size = 'default', testID, ...props },
  ref
) {
  return (
    <div
      className={cardStyle({ size, class: className })}
      {...props}
      data-testid={testID}
      ref={ref}
    />
  );
});

Card.displayName = 'Card';

export { Card };
