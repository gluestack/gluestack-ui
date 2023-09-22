import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  variants: {
    space: {
      xs: {
        w: '$1',
      },
      sm: {
        w: '$1.5',
      },
      md: {
        w: '$2',
      },
      lg: {
        w: '$3',
      },
      xl: {
        w: '$4',
      },
    },
  },
});
