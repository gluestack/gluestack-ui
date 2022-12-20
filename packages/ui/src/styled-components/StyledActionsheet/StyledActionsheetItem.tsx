import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        width: '100%',
        justifyContent: 'flex-start',
        p: '$4',
        px: '$1',
        rounded: '$sm',
        flexDirection: 'row',
        // @ts-ignore
        gap: 16,
        alignItems: 'center',
      },
      state: {
        disabled: {
          style: {
            bg: '$muted50',
          },
        },
        hover: {
          style: {
            bg: '$muted200',
          },
        },
        active: {
          style: {
            bg: '$muted300',
          },
        },
      },
    },
  },
  {}
);
