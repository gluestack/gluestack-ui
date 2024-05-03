import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Platform } from 'react-native';
const baseStyle = Platform.select({
  web: 'flex flex-col relative z-0',
  default: '',
});
export const cardStyle = tva({
  base: baseStyle,
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
