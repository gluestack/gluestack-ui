import { tva } from '@gluestack-ui/nativewind-utils/tva';
export const cardStyle = tva({
  base: 'web:flex web:flex-col web:relative web:z-0',
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
