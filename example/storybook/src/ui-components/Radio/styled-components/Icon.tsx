import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';

export default styled(
  AsForwarder,
  {
    'w': '100%',
    'h': '100%',
    'p': 2,
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': 999,

    ':checked': {
      'color': '$primary600',
      ':disabled': {
        opacity: 0.4,
      },
      ':hover': {
        'color': '$primary700',
        ':disabled': {
          color: '$primary600',
          opacity: 0.4,
        },
      },
    },
    '_dark': {
      ':checked': {
        'color': '$primary500',
        ':disabled': {
          color: '$primary500',
          opacity: 0.4,
        },
        ':hover': {
          'color': '$primary400',
          ':disabled': {
            color: '$primary500',
            opacity: 0.4,
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  }
);
