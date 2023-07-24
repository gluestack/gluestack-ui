import { styled } from '../../styled';
import { Pressable } from 'react-native';
export const Item = styled(
  Pressable,
  {
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
    ':hover': {
      bg: '$backgroundLight50',
    },

    ':active': {
      bg: '$backgroundLight100',
    },

    ':focus': {
      bg: '$backgroundLight100',
    },

    '_dark': {
      ':hover': {
        bg: '$backgroundDark800',
      },

      ':active': {
        bg: '$backgroundDark700',
      },

      ':focus': {
        bg: '$backgroundDark700',
      },
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
