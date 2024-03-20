import { AsForwarder, styled } from '@gluestack-style/react';
import { createFab } from '@gluestack-ui/fab';
import { Text } from 'react-native';
import { Pressable } from 'react-native';

const StyledRoot = styled(
  Pressable,
  {
    'bg': '$primary500',
    'rounded': '$full',
    'zIndex': 20,
    'p': 16,
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'absolute',

    ':hover': {
      bg: '$primary600',
    },

    ':active': {
      bg: '$primary700',
    },

    ':disabled': {
      opacity: 0.4,
      _web: {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
      },
    },

    '_text': {
      color: '$text50',
      fontWeight: '$normal',
    },

    '_icon': {
      'color': '$text50',

      ':hover': {
        color: '$text0',
      },

      ':active': {
        color: '$text0',
      },
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
      },
    },

    'variants': {
      size: {
        sm: {
          px: '$2.5',
          py: '$2.5',
          _text: {
            fontSize: '$sm',
          },
          _icon: {
            props: {
              size: 'sm',
            },
          },
        },
        md: {
          px: '$3',
          py: '$3',
          _text: {
            fontSize: '$md',
          },
          _icon: {
            props: {
              size: 'md',
            },
          },
        },
        lg: {
          px: '$4',
          py: '$4',
          _text: {
            fontSize: '$lg',
          },
          _icon: {
            props: {
              size: 'md',
            },
          },
        },
      },

      placement: {
        'top right': {
          top: '$4',
          right: '$4',
        },

        'top left': {
          top: '$4',
          left: '$4',
        },

        'bottom right': {
          bottom: '$4',
          right: '$4',
        },

        'bottom left': {
          bottom: '$4',
          left: '$4',
        },

        'top center': {
          top: '$4',
          alignSelf: 'center',
          // TODO: fix this, this is correct way, but React Native doesn't support this on Native
          // left: '50%',
          // transform: [
          //   {
          //     // @ts-ignore
          //     translateX: '-50%',
          //   },
          // ],
        },

        'bottom center': {
          bottom: '$4',
          alignSelf: 'center',
          // TODO: fix this, this is correct way, but React Native doesn't support this on Native
          // left: '50%',
          // transform: [
          //   {
          //     // @ts-ignore
          //     translateX: '-50%',
          //   },
          // ],
        },
      },
    },

    'defaultProps': {
      placement: 'bottom right',
      size: 'md',
      hardShadow: '2',
    },
  },
  {
    descendantStyle: ['_text', '_icon'],
  }
);

const StyledText = styled(
  Text,
  {
    color: '$text700',
    flex: 1,
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
const StyledLabel = styled(
  StyledText,
  {
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
    color: '$text50',
  },
  {
    ancestorStyle: ['_text'],
  }
);

const StyledIcon = styled(
  AsForwarder,
  {
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        'lg': {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        'xl': {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
    props: {
      size: 'md',
      //@ts-ignore
      fill: 'none',
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);

export const Fab = createFab({
  Root: StyledRoot,
  Label: StyledLabel,
  Icon: StyledIcon,
});
export const FabLabel = Fab.Label;
export const FabIcon = Fab.Icon;
