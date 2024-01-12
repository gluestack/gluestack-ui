import { createStyle } from '@gluestack-style/react';

export const Pressable = createStyle({
  _web: {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },
  },
});
