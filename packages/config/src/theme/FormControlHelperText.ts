import { createStyle } from '@gluestack-style/react';

export const FormControlHelperText = createStyle({
  props: {
    size: 'xs',
  },
  color: '$textLight500',
  _dark: {
    color: '$textDark400',
  },
});
