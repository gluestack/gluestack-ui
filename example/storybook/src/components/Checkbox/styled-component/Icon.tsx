import { View } from 'react-native';
import { verboseStyled } from '@dank-style/react';

export default verboseStyled(
  View,
  {
    baseStyle: {
      style: {
        w: '100%',
        h: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      },
      state: {
        checked: {
          state: {
            hover: {
              style: { color: 'white' },
            },
          },
        },
        disabled: {
          style: { opacity: 0.6 },
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
