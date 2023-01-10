import { styled } from 'dank-style';
import { View } from 'react-native';

export const StyledProgress = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$muted200',
        h: '$2',
        borderRadius: 999,
        w: '100%',
      },
      colorMode: {
        dark: {
          style: { bg: '$muted500' },
        },
      },
    },
  },
  {}
);
