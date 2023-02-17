import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
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
      opacity: 0.4,
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
