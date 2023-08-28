// @ts-nocheck
import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'position': 'absolute',
    'right': '$3',
    'top': '$3',
    'zIndex': 1,
    'rounded': '$sm',
    'p': '$2',
    '_icon': {
      color: '$muted.500',
    },
    ':hover': {
      bg: '$muted.200',
      _icon: {
        color: '$muted.700',
      },
    },
    ':active': {
      bg: '$muted.300',
      _icon: {
        color: '$muted.900',
      },
    },

    '_dark': {
      '_icon': {
        color: '$muted.400',
      },
      ':hover': {
        bg: 'muted.700',
      },
      ':active': {
        bg: 'muted.600',
        _icon: {
          color: '$muted.100',
        },
      },
    },

    ':focusVisible': {
      bg: '$muted.100',
      _icon: {
        color: '$muted.900',
      },
      _dark: {
        bg: '$muted.700',
        _icon: {
          color: '$muted.100',
        },
      },
    },

    '_web': {
      outlineWidth: 0,
      cursor: 'pointer',
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
  }
);
