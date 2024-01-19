import { createStyle } from '@gluestack-style/react';

export const SelectInput = createStyle({
  _web: {
    w: '$full',
  },

  pointerEvents: 'none',
  flex: 1,
  h: '$full',
  color: '$text900',

  props: {
    placeholderTextColor: '$text500',
  },
});
