import { Pressable } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
        p: '$2',
        // @ts-ignore
        bg: 'transparent',
        rounded: '$sm',
      },
      state: {
        hover: {
          style: {
            //@ts-ignore

            bg: '$muted.200',
          },
        },
        active: {
          style: {
            //@ts-ignore

            bg: '$muted.300',
          },
        },
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            outlineWidth: 0,
            cursor: 'pointer',
          },
        },
      },
    },
  },
  {}
);
