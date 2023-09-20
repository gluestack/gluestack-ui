import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  variants: {
    space: {
      xs: {
        h: '$1',
      },
      sm: {
        h: '$1.5',
      },
      md: {
        h: '$2',
      },
      lg: {
        h: '$3',
      },
      xl: {
        h: '$4',
      },
    },
  },
});
