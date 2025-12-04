'use client';
import React from 'react';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { View } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';

const cardStyle = tva({
  base: 'flex-col bg-background border border-border dark:border-input/10 gap-6 rounded-xl shadow-sm py-6',
});

type ICardProps = React.ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof cardStyle> & { className?: string };

const Card = React.forwardRef<React.ComponentRef<typeof View>, ICardProps>(
  function Card({ className, ...props }, ref) {
    return (
      <View className={cardStyle({ class: className })} {...props} ref={ref} />
    );
  }
);

Card.displayName = 'Card';

export { Card };
