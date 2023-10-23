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
      backgroundColor: '$backgroundLight100',
    },

    ':active': {
      backgroundColor: '$backgroundLight200',
    },

    ':focus': {
      backgroundColor: '$backgroundLight100',
    },

    '_dark': {
      ':hover': {
        backgroundColor: '$backgroundDark800',
      },

      ':active': {
        backgroundColor: '$backgroundDark700',
      },

      ':focus': {
        backgroundColor: '$backgroundDark800',
      },
    },

    '_web': {
      ':focusVisible': {
        backgroundColor: '$backgroundLight100',
        _dark: {
          backgroundColor: '$backgroundDark700',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
    DEBUG: 'ACTIONSHEET_ITEM',
  }
);
