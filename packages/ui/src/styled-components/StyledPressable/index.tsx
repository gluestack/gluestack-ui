import { config } from '../ui.config';
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
            focusvisible: {
              style: {
                // @ts-ignore
                outlineWidth: 0,
                outline: 'none',
                boxShadow: `0px 0px 0px 2px #c084fc`, //get color from config and replace hexcode
              },
            },
          },
        },
      },
    },
    colorMode: {
      dark: {
        platform: {
          web: {
            state: {
              focusvisible: {
                style: {
                  // @ts-ignore
                  outlineWidth: 0,
                  outline: 'none',
                  boxShadow: `0px 0px 0px 2px #a855f7`, //get color from config and replace hexcode
                },
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
  {},
  config
);
