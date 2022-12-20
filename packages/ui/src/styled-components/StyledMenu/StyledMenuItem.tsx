import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        pr: '$3',
        pl: '$5',
        py: '$2',
        bg: '$white',
      },
      state: {
        disabled: {
          style: {
            color: '$muted400',
          },
        },
        hover: {
          style: {
            bg: '$blue100',
          },
        },
        active: {
          style: {
            bg: '$blue400',
          },
        },
      },
    },
  },
  {}
);
