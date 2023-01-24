import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    'alignItems': 'center',
    'color': '$primary600',

    '_dark': {
      color: '$primary400',
    },

    ':disabled': {
      opacity: 0.6,
      color: 'transparent',
    },

    ':checked': {
      'color': '$primary600',

      ':hover': {
        color: '$primary700',
      },

      ':disabled': {
        color: '$primary600',
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
