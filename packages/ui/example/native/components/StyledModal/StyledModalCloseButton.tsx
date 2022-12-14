import { Pressable } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        position: 'absolute',
        right: 3,
        top: 3,
        zIndex: 1,
        p: '$4',
        // @ts-ignore
        bg: 'transparent',
        rounded: '$sm',
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
