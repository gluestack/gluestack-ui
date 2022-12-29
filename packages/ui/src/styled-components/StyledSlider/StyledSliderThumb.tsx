import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary600',
        h: 16,
        w: 16,
        position: 'absolute',
        borderRadius: 9999,
        top: -6,
        marginLeft: '-1%',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$primary500',
          },
        },
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
          },
          state: {
            hover: {
              style: {
                //@ts-ignore
                outlineWidth: 4,
                outlineColor: '$primary300', //
                outlineStyle: 'solid',
              },
              colorMode: {
                dark: {
                  style: {
                    outlineColor: '$primary800',
                  },
                },
              },
            },
            active: {
              style: {
                //@ts-ignore
                outlineWidth: 6,
                outlineColor: '$primary300',
                outlineStyle: 'solid',
              },
              colorMode: {
                dark: {
                  style: {
                    outlineColor: '$primary400',
                  },
                },
              },
            },
            focus: {
              style: {
                //@ts-ignore
                outlineWidth: 2,
                outlineColor: '$primary400',
                outlineStyle: 'solid',
              },
              colorMode: {
                dark: {
                  style: {
                    outlineColor: '$primary800',
                  },
                },
              },
            },
            disabled: {
              style: {
                opacity: 0.4,
              },
            },
          },
        },
      },

      descendants: {},
    },
  },
  {},
  config
);
