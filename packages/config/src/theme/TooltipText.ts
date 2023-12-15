import { createStyle } from '@gluestack-style/react';

export const TooltipText = createStyle({
  color: '$red400',
  fontFamily: '$body',
  _web: {
    userSelect: 'none',
  },
});
