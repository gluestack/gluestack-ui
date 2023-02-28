import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          height: `$1`,
        },
        sm: {
          height: `$2`,
        },
        md: {
          height: `$4`,
        },
        lg: {
          height: `$6`,
        },
        xl: {
          height: `$8`,
        },
      },
    },
  },
  {}
);
