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
    ':disabled': {
      'opacity': 0.6,
      'color': '$primary600',
      ':checked': {
        color: '$primary600',
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
      ':disabled': {
        'color': '$primary500',
        ':checked': {
          color: '$primary500',
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
