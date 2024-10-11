import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
export default styled(
  View,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    // @ts-ignore

    'color': '$white',

    ':checked': {
      ':hover': {
        // @ts-ignore
        color: '$white',
      },
    },

    ':disabled': {
      opacity: 0.6,
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
