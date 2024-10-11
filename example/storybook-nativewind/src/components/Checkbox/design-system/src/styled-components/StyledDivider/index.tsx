import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    bg: '$muted300',

    variants: {
      variant: {
        vertical: {
          width: 1,
          height: '100%',
        },

        horizontal: {
          height: 1,
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
