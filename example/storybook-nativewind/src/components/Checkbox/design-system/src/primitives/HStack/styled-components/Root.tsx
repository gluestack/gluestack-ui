// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    variants: {
      space: {
        '0': {
          gap: '0',
        },
        'xs': {
          gap: '$1',
        },

        '1.5': {
          gap: '$1.5',
        },

        'sm': {
          gap: '$2',
        },

        '3': {
          gap: '$3',
        },

        'md': {
          gap: '$4',
        },

        'lg': {
          gap: '$6',
        },

        'xl': {
          gap: '$8',
        },
      },
    },
    defaultProps: {
      space: '0',
    },
  },
  {}
);
