import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Platform } from 'react-native';
const baseStyle = Platform.select({
  web: 'flex flex-col relative z-0',
  default: '',
});
export const vstackStyle = tva({
  base: `flex-col ${baseStyle}`,
  variants: {
    space: {
      'xs': 'gap-1',
      'sm': 'gap-2',
      'md': 'gap-3',
      'lg': 'gap-4',
      'xl': 'gap-5',
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
    },
    reversed: {
      true: 'flex-col-reverse',
    },
  },
});
