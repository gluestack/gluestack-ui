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

  '_dark': {
    '_icon': {
      color: '$backgroundLight400',
    },
    '_text': {
      color: '$backgroundLight400',
    },
    ':hover': {
      _icon: {
        color: '$backgroundDark200',
      },
      _text: {
        color: '$backgroundLight200',
      },
    },

    ':active': {
      _icon: {
        color: '$backgroundDark100',
      },
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
    _dark: {
      bg: '$backgroundDark700',
      _icon: {
        color: '$backgroundLight100',
      },
      _text: {
        color: '$backgroundLight100',
      },
    },
  },

  '_web': {
    outlineWidth: 0,
    cursor: 'pointer',
  },
});
