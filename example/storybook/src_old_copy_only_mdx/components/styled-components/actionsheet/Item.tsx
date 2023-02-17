import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'width': '100%',
    'justifyContent': 'flex-start',
    'p': '$4',
    'flexDirection': 'row',
    'alignItems': 'center',

    '_web': {
      cursor: 'pointer',
      userSelect: 'none',
    },

    ':disabled': {
      _text: {
        opacity: 0.4,
      },
    },

    ':hover': {
      bg: '$muted100',
    },

    ':active': {
      bg: '$muted200',
    },

    ':focusVisible': {
      bg: '$muted300',

      _web: {
        outline: 'none',
      },
    },
  },
  {
    descendantStyle: ['_text'],
    DEBUG: 'ACTIONSHEET_ITEM',
  }
);
