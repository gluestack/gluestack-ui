import { createStyle } from '@gluestack-style/react';

export const InputSlot = createStyle({
  justifyContent: 'center',
  alignItems: 'center',
  _web: {
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
});
