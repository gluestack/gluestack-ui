import { Pressable } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(Pressable, {
  'right': 8,
  'zIndex': 1,
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
