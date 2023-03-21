import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'px': '$3',
    'py': '$3',
    // 'borderRadius': '$lg',
    'flexDirection': 'row',
    'alignItems': 'center',

    ':disabled': {
      opacity: 0.4,
    },

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

    '_web': {
      ':focusVisible': {
        bg: '$backgroundLight100',
        _dark: {
          bg: '$backgroundDark700',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
    DEBUG: 'ACTIONSHEET_ITEM',
  }
);
