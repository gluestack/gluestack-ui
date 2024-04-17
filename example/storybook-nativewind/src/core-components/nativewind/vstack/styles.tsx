import { tva } from '@gluestack-ui/nativewind-utils/tva';
export const vstackStyle = tva({
  base: 'flex-col web:flex web:relative web:z-0 web:box-border web:border-0 web:list-none web:min-w-0 web:min-h-0 web:bg-transparent web:items-stretch web:m-0 web:p-0 web:text-decoration-none',
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
