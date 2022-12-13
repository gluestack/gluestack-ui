import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        h: 100,
        w: 100,
        bg: '$blue.500',
      },
    },
  },
  {}
);
