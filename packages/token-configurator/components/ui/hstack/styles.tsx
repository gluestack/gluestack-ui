import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Platform } from 'react-native';
const baseStyle = Platform.select({
  web: 'flex relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none',
  default: '',
});
export const hstackStyle = tva({
  base: `flex-row ${baseStyle}`,
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
      true: 'flex-row-reverse',
    },
  },
});
