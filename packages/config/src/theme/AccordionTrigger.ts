import { createStyle } from '@gluestack-style/react';

export const AccordionTrigger = createStyle({
  'py': '$5',
  'px': '$5',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  '_web': {
    outlineWidth: 0,
  },
  ':disabled': {
    opacity: 0.4,
    _web: {
      cursor: 'not-allowed',
    },
  },
  ':focusVisible': {
    _light: {
      bg: '$backgroundLight50',
    },
    _dark: {
      bg: '$backgroundDark900',
    },
  },
});
