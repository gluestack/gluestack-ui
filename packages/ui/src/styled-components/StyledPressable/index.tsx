import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      platform: {
        web: {
          state: {
            focus: {
              style: {
                // @ts-ignore
                outlineWidth: 0,
                boxShadow: `#c084fc 0px 0px 0px 2px`, //get color from config and replace hexcode
              },
            },
          },
        },
      },
    },
  },
  {}
);
