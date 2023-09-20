import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  // h: '100%',
  // w: '100%',
  bg: '$backgroundLight300',
  _dark: {
    bg: '$backgroundDark700',
  },
  borderRadius: '$lg',
  overflow: 'hidden',

  variants: {
    variant: {
      horizontal: {
        width: '100%',
      },
      vertical: {
        height: '100%',
      },
    },
  },
});
