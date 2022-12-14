import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        w: 300,
        bg: '$amber.500',
        flexDirection: 'column',
        p: 8,
      },
      state: {
        disabled: {
          style: {
            borderColor: '$primary.800',
            borderWidth: 2,
          },
        },
        invalid: {
          style: {
            borderColor: '$red.500',
            borderWidth: 2,
          },
        },
      },
    },
  },
  {}
);
