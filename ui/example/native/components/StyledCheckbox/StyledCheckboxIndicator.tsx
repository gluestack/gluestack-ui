import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        bg: '$red.500',
        h: 20,
        w: 20,
      },
    },
  },
  {}
);
