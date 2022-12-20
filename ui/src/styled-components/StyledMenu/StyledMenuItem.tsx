import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        pr: '$3',
        pl: '$6',
        py: '$2',
        bg: '$white',
      },
      state: {
        disabled: {
          style: {
            bg: '$muted100',
          },
        },
        hover: {
          style: {
            bg: '$muted100',
          },
        },
        active: {
          style: {
            bg: '$muted200',
          },
        },
      },
    },
  },
  {}
);
