import { View } from 'react-native';
import { styled } from '@dank-style/react';

const Divider = styled(
  View,
  {
    bg: '$muted300',

    variants: {
      variant: {
        vertical: {
          width: '1px',
          height: '100%',
        },

        horizontal: {
          height: '1px',
          width: '100%',
        },
      },
    },

    defaultProps: {
      variant: 'horizontal',
    },

    _dark: {
      bg: '$muted600',
    },
  },
  {}
);

export { Divider as Root };
export default Divider;
