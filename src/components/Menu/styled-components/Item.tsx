import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';
export const Item = styled(
  Pressable,
  {
    // @ts-ignore
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
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

    ':disabled': {
      'opacity': 0.4,
      ':focus': {
        backgroundColor: 'transparent',
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
