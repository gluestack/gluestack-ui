import { styled } from 'dank-style';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: { bg: '$primary600', h: '100%' },
      colorMode: {
        dark: {
          style: {
            bg: '$primary500',
          },
        },
      },
      descendants: {},
    },
  },
  {}
);
