import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        p: '$2',
        rounded: 'none',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bg: '$white',
        // bg: '$muted100',
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            userSelect: 'none',
          },
        },
      },
    },
  },
  {}
);
