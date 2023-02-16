import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': '$primary500',
    'rounded': '$full',
    'zIndex': 20,
    'px': 16,
    'py': 16,
    'flexDirection': 'row',
    'alignItems': 'center',

    'variants': {
      size: {
        sm: {},
        md: {},
        lg: {},
      },
      position: {
        'top-right': {
          top: 12,
          right: 4,
          position: 'absolute',
        },

        'top-left': {
          top: 12,
          left: 4,
          position: 'absolute',
        },

        'bottom-right': {
          bottom: 4,
          right: 4,
          position: 'absolute',
        },

        'bottom-left': {
          bottom: 4,
          left: 4,
          position: 'absolute',
        },
      },
    },

    'defaultProps': {
      position: 'top-right',
    },

    ':hover': {
      bg: '$primary700',
    },

    ':active': {
      bg: '$primary900',
    },
  },
  {}
);
