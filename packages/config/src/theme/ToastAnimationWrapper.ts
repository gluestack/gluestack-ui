import { createStyle } from '@gluestack-style/react';

export const ToastAnimationWrapper = createStyle({
  m: '$3',
  backgroundColor: 'white',
  borderRadius: '$sm',
  flexDirection: 'row',
  _web: {
    pointerEvents: 'auto',
  },
  defaultProps: {
    hardShadow: '5',
  },
});
