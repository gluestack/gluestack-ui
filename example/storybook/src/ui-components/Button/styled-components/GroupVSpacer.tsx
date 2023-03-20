import { styled } from '@gluestack-ui/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      // variant: {
      //   row: {},
      //   column: {},
      // },

      space: {
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
