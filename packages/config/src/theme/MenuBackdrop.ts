import { createStyle } from '@gluestack-style/react';

export const MenuBackdrop = createStyle({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  // use this for when you want to give background colour to backdrop
  // opacity: 0.5,
  // bg: '$background500',
  _web: {
    cursor: 'default',
  },
});
