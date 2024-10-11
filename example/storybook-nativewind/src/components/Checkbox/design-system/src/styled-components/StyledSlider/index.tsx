import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    'h': 4,
    'w': 800,
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'relative',

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {}
);
