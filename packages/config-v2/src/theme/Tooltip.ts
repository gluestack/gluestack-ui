import { createStyle } from '@gluestack-style/react';

export const Tooltip = createStyle({
  width: '$full',
  height: '$full',
  _web: {
    pointerEvents: 'none',
  },
});
