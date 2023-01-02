import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
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
