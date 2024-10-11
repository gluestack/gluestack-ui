import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        'xs': {
          width: '$1',
        },

        '1.5': {
          width: '$1.5',
        },

        'sm': {
          width: '$2',
        },

        '3': {
          width: '$3',
        },

        'md': {
          width: '$4',
        },

        'lg': {
          width: '$6',
        },

        'xl': {
          width: '$8',
        },
      },
    },
  },
  {}
);
