import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';

export default styled(
  AsForwarder,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '$full',
    ':checked': {
      'color': '$primary600',
      ':disabled': {
        opacity: 1,
      },
      ':hover': {
        'color': '$primary700',
        ':disabled': {
          color: '$primary600',
          opacity: 1,
        },
      },
    },
    '_dark': {
      ':checked': {
        'color': '$primary500',
        ':disabled': {
          color: '$primary500',
          opacity: 1,
        },
        ':hover': {
          ':disabled': {
            color: '$primary500',
            opacity: 1,
          },
          'color': '$primary400',
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  }
);
