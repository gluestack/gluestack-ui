import { Pressable } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Pressable,
  {
    'position': 'absolute',
    'right': 10,
    'top': 10,
    'zIndex': 1,
    'p': '$2',
    // @ts-ignore
    'bg': 'transparent',
    'rounded': '$sm',
    ':hover': {
      bg: '$muted200',
    },
    ':active': {
      bg: '$muted300',
    },
    ':focusVisible': {
      bg: '$muted400',
    },
    '_web': {
      // @ts-ignore
      outlineWidth: 0,
    },
    '_dark': {
      ':hover': {
        bg: '$muted700',
      },
      ':active': {
        bg: '$muted600',
      },
    },
  },
  {}
);
