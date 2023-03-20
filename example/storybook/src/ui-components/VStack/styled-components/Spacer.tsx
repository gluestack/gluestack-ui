import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          h: `$1`,
        },
        sm: {
          h: `$2`,
        },
        md: {
          h: `$4`,
        },
        lg: {
          h: `$6`,
        },
        xl: {
          h: `$8`,
        },
      },
    },
  },
  {}
);
