import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // bg: '$red500',
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            pointerEvents: 'box-none',
          },
        },
      },
    },
    defaultProps: {},
  },
  {}
);
