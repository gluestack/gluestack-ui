import { createConfigStyle } from '@gluestack-ui/unstyled';
export const Root = createConfigStyle({
  ':initial': {
    opacity: 0,
  },
  ':animate': {
    opacity: 1,
  },
  ':exit': {
    opacity: 0,
  },
  ':transition': {
    type: 'spring',
    damping: 18,
    stiffness: 250,
    opacity: {
      type: 'timing',
      duration: 200,
    },
  },
  'minWidth': 200,
  'py': '$2',
  'rounded': '$sm',
  'bg': '$backgroundLight0',
  '_dark': {
    bg: '$backgroundDark900',
  },
  'defaultProps': {
    softShadow: '3',
  },
});
