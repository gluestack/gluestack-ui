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
            bg: '$blue800',
          },
        },
        disabled: {
          style: {
            // @ts-ignore
            opacity: '0.4',
          },
        },
      },
    },

    variants: {
      solid: {
        style: {
          bg: '$blue600',
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
              bg: '$blue700',
            },
          },
          active: {
            style: {
              bg: '$blue800',
            },
          },
        },
      },
      subtle: {
        style: {
          bg: '$blue100',
        },
        descendants: {
          _text: {
            style: {
              color: '$blue900',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$blue200',
            },
          },
          active: {
            style: {
              bg: '$blue300',
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
              color: '$blue600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$blue600_alpha10', //replace it with alpha token "$blue600:alpha10 when supported"
              // backgroundOpacity: '0.1',
            },
          },
          active: {
            style: {
              bg: '$blue600_alpha20', //replace it with alpha token "$blue600:alpha20 when supported"
            },
          },
        },
      },
      ghost: {
        descendants: {
          _text: {
            style: {
              color: '$blue600',
            },
          },
        },
        state: {
          hover: {
            style: {
              bg: '$blue600_alpha10', //replace it with alpha token "$blue600:alpha10 when supported"
            },
          },
          active: {
            style: {
              bg: '$blue600_alpha20', //replace it with alpha token "$blue600:alpha20 when supported"
            },
          },
        },
      },
    },
    sizes: {
      xs: {
        style: {
          px: '$3',
          py: '$2',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 10,
            },
          },
        },
      },
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
      lg: {
        style: {
          px: '$3',
          py: '$3',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 16,
            },
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
  },
  {
    descendentStyle: ['_text'],
  }
);
