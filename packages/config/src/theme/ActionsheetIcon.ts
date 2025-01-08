import { createStyle } from '@gluestack-style/react';

export const ActionsheetIcon = createStyle({
  props: {
    size: 'sm',
  },
  color: '$backgroundLight500',
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
});
