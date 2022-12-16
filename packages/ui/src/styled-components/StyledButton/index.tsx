import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
            userSelect: 'none',
          },
        },
      },
      state: {
        hover: {
          style: {
            bg: '$primary800',
          },
        },
      },
    },

    variants: {
      solid: {
        style: {
          bg: '$primary600',
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary700',
            },
          },
          active: {
            style: {
              bg: '$primary800',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$primary100',
        },
        descendants: {
          _text: {
            style: {
              color: '$primary900',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary200',
            },
          },
          active: {
            style: {
              bg: '$primary300',
            },
          },
        },
      },
      outline: {
        style: {
          //@ts-ignore
          bg: 'transparent',
          borderWidth: 1,
          borderColor: '$trueGray.300',
        },
        descendants: {
          _text: {
            style: {
              color: '$primary600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary600',
            },
          },
          active: {
            style: {
              bg: '$primary600',
            },
          },
        },
      },
      ghost: {
        descendants: {
          _text: {
            style: {
              color: '$primary600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary600',
            },
          },
          active: {
            style: {
              bg: '$primary600',
            },
          },
        },
      },
    },
    sizes: {
      sm: {
        style: {
          px: '$3',
          py: '$2',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 12,
            },
          },
        },
      },
      md: {
        style: {
          px: '$3',
          py: '$2.5',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 14,
            },
          },
        },
      },
    },

    defaultProps: {
      size: 'sm',
      variant: 'solid',
    },
  },
  {
    descendentStyle: ['_text'],
  }
);
