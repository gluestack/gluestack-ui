import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        'xs': {
          height: '$1',
        },

        '1.5': {
          height: '$1.5',
        },

        'sm': {
          height: '$2',
        },

        'md': {
          height: '$4',
        },

        'lg': {
          height: '$6',
        },

        'xl': {
          height: '$8',
        },
      },
    },
  },
  {}
);
