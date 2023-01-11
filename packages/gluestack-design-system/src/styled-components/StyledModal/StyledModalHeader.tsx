import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        borderBottomWidth: 1,
        bg: '$muted50',
        borderColor: '$muted200',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted800',
            borderColor: '$muted700',
          },
        },
      },
    },
  },
  {}
);
