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
      backgroundColor: '$backgroundLight.100',
    },

    ':active': {
      backgroundColor: '$backgroundLight.200',
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
        backgroundColor: '$backgroundDark.800',
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
