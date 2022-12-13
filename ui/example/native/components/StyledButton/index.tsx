import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary.600',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      state: {
        hover: {
          style: {
            bg: '$primary.800',
          },
          descendants: {
            _text: {
              style: {
                color: '$text.500',
              },
            },
          },
        },
      },
      descendants: {
        _text: {
          style: {
            color: '$text.800',
          },
        },
      },
    },

    variants: {
      blueBox: {
        style: { bg: '$blue.500' },
      },
      greenBox: {
        style: {
          bg: '$green.500',
        },
        state: {
          hover: {
            style: {
              bg: '$green.700',
            },
            descendants: {
              _text: {
                style: {
                  color: '$text.300',
                },
              },
            },
          },
        },
      },
    },

    sizes: {
      small: {
        style: {
          p: 10,
        },
      },
      medium: {
        style: {
          p: 20,
        },
      },
      large: {
        style: {
          p: 30,
        },
      },
    },

    defaultProps: {
      size: 'small',
      variant: 'greenBox',
    },
  },
  {
    descendentStyle: ['_text'],
  }
);
