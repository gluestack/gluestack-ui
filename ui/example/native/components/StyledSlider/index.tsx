import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: { bg: '$amber.100', h: 10, w: 800 },
      descendants: {},
    },
  },
  {}
);
