import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { Pressable as RNPressable } from 'react-native';

const Pressable = styled(
  RNPressable,
  {
    baseStyle: {
      platform: {
        web: {
          style: {
            outlineWidth: 0,
            outline: 'none',
          },
          state: {
            focus: {
              style: {
                // @ts-ignore
                outlineWidth: 0,
                boxShadow: `#c084fc 0px 0px 0px 2px`, //get color from config and replace hexcode
              },
              colorMode: {
                dark: {
                  style: {
                    boxShadow: `#a855f7 0px 0px 0px 2px`, //get color from config and replace hexcode}
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {}
);

export { Pressable as Root };
