import { createStyle } from '@gluestack-style/react';

export const Spinner = createStyle({
  props: {
    color: '$primary500',
  },
  _dark: {
    props: {
      color: '$primary400',
    },
  },
});
