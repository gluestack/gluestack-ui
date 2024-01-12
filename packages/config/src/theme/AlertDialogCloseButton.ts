import { createStyle } from '@gluestack-style/react';

export const AlertDialogCloseButton = createStyle({
  'zIndex': 1,
  'rounded': '$sm',
  'p': '$2',

  '_icon': {
    color: '$backgroundLight400',
  },

  '_text': {
    color: '$backgroundLight400',
  },

  ':hover': {
    _icon: {
      color: '$backgroundLight700',
    },
    _text: {
      color: '$backgroundLight700',
    },
  },

  ':active': {
    _icon: {
      color: '$backgroundLight900',
    },
    _text: {
      color: '$backgroundLight900',
    },
  },

  ':focusVisible': {
    bg: '$backgroundLight100',

    _icon: {
      color: '$backgroundLight900',
    },

    _text: {
      color: '$backgroundLight900',
    },
  },

  '_web': {
    outlineWidth: 0,
    cursor: 'pointer',
  },
});
