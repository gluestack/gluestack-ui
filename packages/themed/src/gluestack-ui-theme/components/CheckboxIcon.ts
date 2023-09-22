import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
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
