import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
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
