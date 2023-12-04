import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Pressable,
  {
    'zIndex': 1,
    'position': 'absolute',
    'right': '$3',
    'top': '$3',
    // @ts-ignore
    'p': '$2',
    // @ts-ignore
    'rounded': '$sm',
    '_icon': {
      color: '$muted.500',
    },
    '_text': {
      color: '$muted.500',
    },

    ':hover': {
      backgroundColor: '$muted.200',
      _icon: {
        color: '$muted.700',
      },
      _text: {
        color: '$muted.700',
      },
    },

    ':active': {
      backgroundColor: '$muted.300',
      _icon: {
        color: '$muted.900',
      },
      _text: {
        color: '$muted.900',
      },
    },

    '_dark': {
      '_icon': {
        color: '$muted.400',
      },
      '_text': {
        color: '$muted.400',
      },
      ':hover': {
        backgroundColor: '$muted.700',
        _icon: {
          color: '$muted.200',
        },
        _text: {
          color: '$muted.200',
        },
      },

      ':active': {
        backgroundColor: '$muted.600',
        _icon: {
          color: '$muted.100',
        },
        _text: {
          color: '$muted.100',
        },
      },
    },
    ':focusVisible': {
      backgroundColor: '$muted.100',
      _icon: {
        color: '$muted.900',
      },
      _text: {
        color: '$muted.900',
      },
      _dark: {
        backgroundColor: '$muted.700',
        _icon: {
          color: '$muted.100',
        },
        _text: {
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
    componentName: 'PopoverCloseButton',
    descendantStyle: ['_icon', '_text'],
  } as const
);
