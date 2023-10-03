import { createStyle } from '@gluestack-style/react';

export const LinkText = createStyle({
  textDecorationLine: 'underline',
  color: '$info700',
  _dark: {
    color: '$info300',
  },
});
