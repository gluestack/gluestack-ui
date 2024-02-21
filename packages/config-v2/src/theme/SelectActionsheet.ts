import { createStyle } from '@gluestack-style/react';

export const SelectActionsheet = createStyle({
  width: '$full',
  height: '$full',
  justifyContent: 'flex-end',
  alignItems: 'center',
  _web: {
    pointerEvents: 'none',
  },
});
