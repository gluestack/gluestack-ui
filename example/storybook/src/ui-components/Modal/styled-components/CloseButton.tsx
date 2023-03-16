import { Pressable } from 'react-native';
import { styled } from '../../core/styled';

export default styled(Pressable, {
  'right': 8,
  'zIndex': 1,
  'pr': '$2',
  'bg': 'transparent',
  'rounded': '$sm',
  'color': '$backgroundLight400',

  ':hover': {
    color: '$backgroundLight700',
  },

  ':active': {
    color: '$backgroundLight900',
  },

  '_dark': {
    'color': '$backgroundLight400',
    ':hover': {
      color: '$backgroundLight200',
    },

    ':active': {
      color: '$backgroundLight100',
    },
  },

  ':focusVisible': {
    p: '$2',
    bg: '$backgroundLight100',
    color: '$backgroundLight700',
    _dark: {
      bg: '$backgroundDark800',
      color: '$backgroundLight200',
    },
  },

  '_web': {
    outlineWidth: 0,
    cursor: 'pointer',
  },
});
