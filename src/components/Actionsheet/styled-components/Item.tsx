import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    // @ts-ignore
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
    // @ts-ignore
    'rounded': '$sm',
    // @ts-ignore
    'w': '100%',

    ':disabled': {
      opacity: 0.4,
      // @ts-ignore
      _web: {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
      },
    },

    ':hover': {
      backgroundColor: '$backgroundLight.50',
    },

    ':active': {
      backgroundColor: '$backgroundLight.100',
    },

    ':focus': {
      backgroundColor: '$backgroundLight.100',
    },

    '_dark': {
      ':hover': {
        backgroundColor: '$backgroundDark.800',
      },

      ':active': {
        backgroundColor: '$backgroundDark.700',
      },

      ':focus': {
        backgroundColor: '$backgroundDark.700',
      },
    },

    '_web': {
      ':focusVisible': {
        backgroundColor: '$backgroundLight.100',
        _dark: {
          backgroundColor: '$backgroundDark.700',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
