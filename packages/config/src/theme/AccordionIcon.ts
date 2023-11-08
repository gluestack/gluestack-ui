import { createStyle } from '@gluestack-style/react';

export const AccordionIcon = createStyle({
  props: {
    size: 'md',
  },
  ml: '$3',
  _dark: {
    color: '$backgroundDark50',
  },
  _light: {
    color: '$backgroundLight900',
  },
});
