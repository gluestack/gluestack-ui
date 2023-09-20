import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  ':checked': {
    color: '$backgroundLight0',
  },
  ':disabled': {
    opacity: 0.4,
  },
  '_dark': {
    ':checked': {
      color: '$backgroundDark0',
    },
    ':disabled': {
      opacity: 0.4,
    },
  },
});
