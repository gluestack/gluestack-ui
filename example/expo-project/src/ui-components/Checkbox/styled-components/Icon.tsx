import { CheckIcon } from '../../Icons/Icons';
import { styled } from '../../styled';
export default styled(
  CheckIcon,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '$primary600',

    ':checked': {
      'color': '$primary600',
      ':hover': {
        color: '$primary700',
      },
    },
    '_dark': {
      'color': '$primary500',
      ':checked': {
        'color': '$primary500',

        ':hover': {
          color: '$primary400',
        },
      },
    },

    ':disabled': {
      opacity: 0.6,
    },
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'CHECKBOX_ICON',
  }
);
