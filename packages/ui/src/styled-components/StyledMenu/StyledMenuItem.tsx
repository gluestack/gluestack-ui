import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        // pr: '$3',
        // pl: '$6',
        // py: '$2',
        px: '$3',
        py: '$2',
        bg: '$white',
      },
      state: {
        disabled: {
          style: {
            opacity: 0.4,
          },
        },
        hover: {
          style: {
            bg: '$muted200',
          },
        },
        active: {
          style: {
            bg: '$muted400',
          },
        },
        focus: {
          style: {
            bg: '$muted300',
          },
        },
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            outlineWidth: 0,
          },
        },
      },
    },
  },
  {}
);
