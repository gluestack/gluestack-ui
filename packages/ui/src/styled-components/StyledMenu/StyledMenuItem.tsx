import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        px: '$3',
        py: '$2',
        bg: '$white',
      },
      state: {
        disabled: {
          style: {
            color: '$gray.400',
          },
        },
        hover: {
          style: {
            bg: '$gray.200',
          },
        },
        active: {
          style: {
            bg: '$gray.400',
          },
        },
      },
    },
  },
  {}
);
