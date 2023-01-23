import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      variant: {
        row: {
          // flexDirection: 'row',
        },
        column: {
          // flexDirection: 'column',
        },
      },
      size: {
        sm: {
          // width: '$10',
          // height: '$10',
        },
        md: {
          // width: '$20',
        },
        lg: {
          // width: '$30',
          // height: '$30',
        },
      },
    },
  },
  {}
);
