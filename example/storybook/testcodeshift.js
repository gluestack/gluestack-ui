import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'position': 'absolute',
    'right': 10,
    'top': 10,
    'zIndex': 1,
    'p': '$2',
    'bg': 'transparent',
    'rounded': '$sm',

    ':hover': {
      bg: '$muted200',
    },

    ':active': {
      bg: '$muted300',
    },

    '_dark': {
      ':hover': {
        bg: '$muted700',
      },

      ':active': {
        bg: '$muted600',
      },
    },

    '_web': {
      outlineWidth: 0,
      cursor: 'pointer',
    },
  },
  {}
);
