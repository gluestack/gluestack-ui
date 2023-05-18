import { AsForwarder } from '@dank-style/react';
import { styled } from '../../styled';

export default styled(
  AsForwarder,
  {
    'w': '100%',
    'h': '100%',
    'p': 2,
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '$primary600',
    'opacity': 0,

    ':checked': {
      'opacity': 1,
      ':hover': {
        'color': '$primary700',
        ':disabled': {
          color: '$primary600',
        },
      },
    },
    '_dark': {
      'color': '$primary500',
      ':checked': {
        'opacity': 1,
        ':hover': {
          'color': '$primary400',
          ':disabled': {
            color: '$primary500',
          },
        },
      },
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  }
);
