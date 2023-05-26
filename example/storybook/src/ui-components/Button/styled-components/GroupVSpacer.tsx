import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
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
          h: 12,
        },
        xl: {
          w: 16,
        },
      },
    },
  },
  { ancestorStyle: ['_groupVSpacer'] }
);
