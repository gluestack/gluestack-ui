import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    'alignItems': 'center',

    ':disabled': {
      opacity: 0.6,
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
