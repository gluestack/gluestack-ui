import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'px': '$3',
    'py': '$2',
    // 'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    // 'bg': '$warning400',
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
  { DEBUG: 'MenuItem' }
);
