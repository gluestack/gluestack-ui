import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: { bg: '$violet.500', h: '100%' },

      descendants: {},
    },
  },
  {}
);
