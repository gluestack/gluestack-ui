import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          width: `$1`,
        },
        sm: {
          width: `$2`,
        },
        md: {
          width: `$4`,
        },
        lg: {
          width: `$6`,
        },
        xl: {
          width: `$8`,
        },
      },
    },
  },
  {}
);
