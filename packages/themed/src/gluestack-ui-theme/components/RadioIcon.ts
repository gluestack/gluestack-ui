import { createStyle } from '@gluestack-ui/themed';

export default createStyle({
  'borderRadius': '$full',
  ':checked': {
    'color': '$primary600',
    ':hover': {
      'color': '$primary700',
      ':disabled': {
        color: '$primary600',
      },
    },
  },
  '_dark': {
    ':checked': {
      'color': '$primary500',
      ':disabled': {
        color: '$primary500',
      },
      ':hover': {
        ':disabled': {
          color: '$primary500',
        },
        'color': '$primary400',
      },
    },
  },
});
