import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      variant: {
        row: {},
        column: {},
      },
    },

    defaultProps: {
      space: 'md',
    },
  },
  {}
);
