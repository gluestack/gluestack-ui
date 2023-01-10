import { styled } from 'dank-style';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        h: 4,
        w: 800,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      state: {
        disabled: {
          style: {
            opacity: 0.4,
          },
        },
      },
      platform: {
        web: {
          state: {
            disabled: {
              style: {
                // @ts-ignore
                cursor: 'not-allowed',
              },
            },
          },
        },
      },
      descendants: {},
    },
  },
  {}
);
