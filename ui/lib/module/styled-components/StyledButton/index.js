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
            bg: '$primary.800',
          },
        },
      },
    },
    variants: {
      solid: {
        style: {
          bg: '$primary.600',
        },
        descendants: {
          _text: {
            style: {
              color: '$text.50',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary.700',
            },
          },
          active: {
            style: {
              bg: '$primary.800',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$primary.100',
        },
        descendants: {
          _text: {
            style: {
              color: '$primary.900',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary.200',
            },
          },
          active: {
            style: {
              bg: '$primary.300',
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
              color: '$primary.600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary.600',
            },
          },
          active: {
            style: {
              bg: '$primary.600',
            },
          },
        },
      },
      ghost: {
        descendants: {
          _text: {
            style: {
              color: '$primary.600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$primary.600',
            },
          },
          active: {
            style: {
              bg: '$primary.600',
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
//# sourceMappingURL=index.js.map
