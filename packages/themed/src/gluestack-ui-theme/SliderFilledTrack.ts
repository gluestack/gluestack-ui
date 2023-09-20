import { createConfigStyle } from '@gluestack-ui/unstyled';

export default createConfigStyle({
  'bg': '$primary500',
  '_dark': {
    bg: '$primary400',
  },
  ':focus': {
    bg: '$primary600',
    _dark: {
      bg: '$primary300',
    },
  },
  ':active': {
    bg: '$primary600',
    _dark: {
      bg: '$primary300',
    },
  },
  ':hover': {
    bg: '$primary600',
    _dark: {
      bg: '$primary300',
    },
  },
});
