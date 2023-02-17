import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      variant: {
        row: {},
        column: {},
      },

      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
  {}
);
