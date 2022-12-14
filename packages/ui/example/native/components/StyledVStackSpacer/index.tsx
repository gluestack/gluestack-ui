import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    sizes: {
      sm: {
        style: {
          h: '$10',
        },
      },
      md: {
        style: {
          h: '$20',
        },
      },
      lg: {
        style: {
          h: '$30',
        },
      },
    },
  },
  {}
);
