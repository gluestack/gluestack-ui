import { createStyle } from '@gluestack-style/react';

export const ModalCloseButton = createStyle({
  'zIndex': 1,
  'p': '$2',
  'rounded': '$sm',

  '_icon': {
    color: '$background400',
  },

  '_text': {
    color: '$background400',
  },

  ':hover': {
    _icon: {
      color: '$background700',
    },
    _text: {
      color: '$background700',
    },
  },

  ':active': {
    _icon: {
      color: '$background900',
    },
    _text: {
      color: '$background900',
    },
  },

  ':focusVisible': {
    bg: '$background100',

    _icon: {
      color: '$background900',
    },

    _text: {
      color: '$background900',
    },
  },

  '_web': {
    outlineWidth: 0,
    cursor: 'pointer',
  },
});
