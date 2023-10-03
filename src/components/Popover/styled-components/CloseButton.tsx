// @ts-nocheck
import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Pressable,
  {
    'zIndex': 1,
    'position': 'absolute',
    'right': '$3',
    'top': '$3',
    'p': '$2',
    'rounded': '$sm',
    '_icon': {
      color: '$muted.500',
    },
    '_text': {
      color: '$muted.500',
    },

    ':hover': {
      bg: '$muted.200',
      // _icon: {
      //   color: '$muted.700',
      // },
      // _text: {
      //   color: '$muted.700',
      // },
    },

    ':active': {
      bg: '$muted.300',
      // _icon: {
      //   color: '$muted.900',
      // },
      // _text: {
      //   color: '$muted.900',
      // },
    },

    '_dark': {
      '_icon': {
        color: '$muted.400',
      },
      '_text': {
        color: '$muted.400',
      },
      ':hover': {
        bg: '$muted.700',
        // _icon: {
        //   color: '$muted.200',
        // },
        // _text: {
        //   color: '$muted.200',
        // },
      },

      ':active': {
        bg: '$muted.600',
        // _icon: {
        //   color: '$muted.100',
        // },
        // _text: {
        //   color: '$muted.100',
        // },
      },
    },
    ':focusVisible': {
      bg: '$muted.100',
      // _icon: {
      //   color: '$muted.900',
      // },
      // _text: {
      //   color: '$muted.900',
      // },
      _dark: {
        bg: '$muted.700',
        // _icon: {
        //   color: '$muted.100',
        // },
        // _text: {
        //   color: '$muted.100',
        // },
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
