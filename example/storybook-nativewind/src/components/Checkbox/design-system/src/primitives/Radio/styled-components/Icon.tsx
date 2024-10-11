import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    'alignItems': 'center',
    'color': '$primary600',

    '_dark': {
      // @ts-ignore
      color: '$primary400',
    },

    ':disabled': {
      opacity: 0.6,
      // @ts-ignore
      color: 'transparent',
    },

    ':checked': {
      'color': '$primary600',

      ':hover': {
        // @ts-ignore
        color: '$primary700',
      },

      ':disabled': {
        // @ts-ignore
        color: '$primary600',
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
