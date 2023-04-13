import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(Pressable, {
  'right': 8,
  'zIndex': 1,
  'pr': '$2',
  'bg': 'transparent',
  'rounded': '$sm',
  'color': '$backgroundLight400',

  ':hover': {
    //@ts-ignore
    color: '$backgroundLight700',
  },

  ':active': {
    //@ts-ignore
    color: '$backgroundLight900',
  },

  '_dark': {
    'color': '$backgroundLight400',
    ':hover': {
      //@ts-ignore
      color: '$backgroundLight200',
    },

    ':active': {
      //@ts-ignore
      color: '$backgroundLight100',
    },
  },

  ':focusVisible': {
    p: '$2',
    bg: '$backgroundLight100',
    //@ts-ignore
    color: '$backgroundLight700',
    _dark: {
      bg: '$backgroundDark800',
      //@ts-ignore
      color: '$backgroundLight200',
    },
  },

  '_web': {
    outlineWidth: 0,
    cursor: 'pointer',
  },
});
