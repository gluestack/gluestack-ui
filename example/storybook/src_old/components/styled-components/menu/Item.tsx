import { Pressable } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Pressable,
  {
    'px': '$3',
    'py': '$2',
    'flexDirection': 'row',
    'alignItems': 'center',

    ':disabled': {
      opacity: 0.4,
    },

    ':hover': {
      bg: '$muted200',
    },

    ':active': {
      bg: '$muted400',
    },

    ':focus': {
      bg: '$gray300',
    },

    '_dark': {
      ':hover': {
        bg: '$muted700',
      },

      ':active': {
        bg: '$muted600',
      },

      ':focus': {
        bg: '$muted500',
      },
    },

    '_web': {
      'outlineWidth': 0,

      ':focusVisible': {
        bg: '$muted300',
      },
    },
  },
  {}
);
