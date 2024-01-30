import { createStyle } from '@gluestack-style/react';

export const AccordionTrigger = createStyle({
  'width': '$full',
  'py': '$5',
  'px': '$5',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center',
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
    bg: '$background50',
  },
});
