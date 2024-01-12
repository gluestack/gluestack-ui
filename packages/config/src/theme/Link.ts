import { createStyle } from '@gluestack-style/react';

export const Link = createStyle({
  _web: {
    'outlineWidth': 0,
    ':disabled': {
      cursor: 'not-allowed',
    },
    ':focusVisible': {
      outlineWidth: 2,
      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },
  },
  _text: {
    ':hover': {
      color: '$info600',
      textDecorationLine: 'none',
    },

    ':active': {
      color: '$info700',
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
});
