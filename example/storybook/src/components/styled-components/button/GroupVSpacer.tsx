import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      // variant: {
      //   row: {},
      //   column: {},
      // },

      size: {
        xs: {
          h: 4,
        },
        sm: {
          h: 6,
        },
        md: {
          h: 8,
        },
        lg: {
          h: 8,
        },
      },
    },
  },
  { ancestorStyle: ['_groupVSpacer'] }
);
