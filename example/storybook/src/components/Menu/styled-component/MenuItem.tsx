import { Pressable } from 'react-native';
import { styled } from '@dank-style/react';

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
        // bg: '$white',
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
            bg: '$gray300',
          },
        },
      },
      colorMode: {
        dark: {
          state: {
            hover: {
              style: {
                bg: '$muted700',
              },
            },
            active: {
              style: {
                bg: '$muted600',
              },
            },
            focus: {
              style: {
                bg: '$muted500',
              },
            },
          },
        },
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            outlineWidth: 0,
          },
          state: {
            focusVisible: {
              style: {
                bg: '$muted300',
              },
            },
          },
        },
      },
    },
  },
  {}
);
