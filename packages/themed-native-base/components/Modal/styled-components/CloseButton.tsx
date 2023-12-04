import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Pressable,
  {
    'position': 'absolute',
    'right': '$3',
    'top': '$3',
    'zIndex': 1,
    // @ts-ignore
    'rounded': '$sm',
    // @ts-ignore
    'p': '$2',
    '_icon': {
      color: '$muted.500',
    },
    ':hover': {
      backgroundColor: '$muted.200',
      _icon: {
        color: '$muted.700',
      },
    },
    ':active': {
      backgroundColor: '$muted.300',
      _icon: {
        color: '$muted.900',
      },
    },

    '_dark': {
      '_icon': {
        color: '$muted.400',
      },
      ':hover': {
        backgroundColor: 'muted.700',
      },
      ':active': {
        backgroundColor: 'muted.600',
        _icon: {
          color: '$muted.100',
        },
      },
    },

    ':focusVisible': {
      backgroundColor: '$muted.100',
      _icon: {
        color: '$muted.900',
      },
      _dark: {
        backgroundColor: '$muted.700',
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
    componentName: 'ModalCloseButton',
    descendantStyle: ['_icon', '_text'],
  } as const
);
