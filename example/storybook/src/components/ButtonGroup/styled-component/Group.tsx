import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    h: '$5',
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
