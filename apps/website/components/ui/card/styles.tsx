import { tva } from '@gluestack-ui/utils-v4-experimental/nativewind-utils';
import { isWeb } from '@gluestack-ui/utils-v4-experimental/nativewind-utils';
const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const cardStyle = tva({
  base: baseStyle,
  variants: {
    size: {
      sm: 'p-3 rounded',
      md: 'p-4 rounded-md',
      lg: 'p-6 rounded-xl',
    },
    variant: {
      elevated: 'bg-background',
      outline: 'border border-border/20',
      ghost: 'rounded-none',
      filled: 'bg-background/10',
    },
  },
});
