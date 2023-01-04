import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        h: '100%',
        bg: '$muted200',
        borderRadius: 32,
        overflow: 'hidden',
      },
      state: {
        disabled: {
          style: {
            opacity: 0.4,
          },
        },
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted700',
          },
        },
      },
      descendants: {},
    },
  },
  {}
);
