import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': 'white',
    ':checked': {
      ':hover': { color: 'white' },
    },
    ':disabled': {
      opacity: 0.6,
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
