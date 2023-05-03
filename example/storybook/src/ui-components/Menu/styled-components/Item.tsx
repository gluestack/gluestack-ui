import { styled } from '../../styled';
import { Pressable } from 'react-native';
export const Item = styled(
  Pressable,
  {
    'px': '$3',
    'py': '$2',
    ':hover': {
      bg: '$backgroundLight50',
    },

    ':active': {
      bg: '$red100',
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
      opacity: 0.6,
    },
    '_web': {
      ':focusVisible': {
        bg: '$backgroundLight100',
        _dark: {
          bg: '$backgroundDark700',
        },
      },
    },
  },
  {}
);
