import { createStyle } from '@gluestack-style/react';

export const TextareaInput = createStyle({
  p: '$2',
  color: '$text900',
  textAlignVertical: 'top',
  flex: 1,

  props: {
    // @ts-ignore
    multiline: true,
    placeholderTextColor: '$text600',
  },

  _web: {
    'cursor': 'text',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
});
