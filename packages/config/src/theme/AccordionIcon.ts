import { createStyle } from '@gluestack-style/react';

export const AccordionIcon = createStyle({
  props: {
    size: 'xl',
  },
  _light: {
    color: '$backgroundLight900',
  },
  _dark: {
    //style not applying
    color: '$backgroundDark50',
  },
});
