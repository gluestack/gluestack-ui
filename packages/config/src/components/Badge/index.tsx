import { AsForwarder, styled } from '@gluestack-style/react';
import { Text, View } from 'react-native';

const StyledRoot = styled(
  View,
  {
    'flexDirection': 'row',
    'alignItems': 'center',
    'borderRadius': '$xs',
    'variants': {
      action: {
        error: {
          bg: '$backgroundError',
          borderColor: '$error300',

          _icon: {
            color: '$error600',
          },

          _text: {
            color: '$error600',
          },
        },
        warning: {
          bg: '$backgroundWarning',
          borderColor: '$warning300',

          _icon: {
            color: '$warning600',
          },

          _text: {
            color: '$warning600',
          },
        },
        success: {
          bg: '$backgroundSuccess',
          borderColor: '$success300',

          _icon: {
            color: '$success600',
          },

          _text: {
            color: '$success600',
          },
        },
        info: {
          bg: '$backgroundInfo',
          borderColor: '$info300',

          _icon: {
            color: '$info600',
          },

          _text: {
            color: '$info600',
          },
        },
        muted: {
          bg: '$backgroundMuted',
          borderColor: '$secondary300',

          _icon: {
            color: '$secondary600',
          },

          _text: {
            color: '$secondary600',
          },
        },
      },

      variant: {
        solid: {},
        outline: {
          borderWidth: '$1',
        },
      },

      size: {
        sm: {
          px: '$2',
          _icon: {
            props: {
              size: '2xs',
            },
          },
          _text: {
            props: {
              size: '2xs',
            },
          },
        },
        md: {
          px: '$2',
          _icon: {
            props: {
              size: 'xs',
            },
          },
          _text: {
            props: {
              size: 'xs',
            },
          },
        },
        lg: {
          px: '$2',
          _icon: {
            props: { size: 'sm' },
          },
          _text: {
            props: { size: 'sm' },
          },
        },
      },
    },

    ':disabled': {
      opacity: 0.5,
    },
    'defaultProps': {
      action: 'info',
      variant: 'solid',
      size: 'md',
    },
  },
  {
    componentName: 'Badge',
    descendantStyle: ['_text', '_icon'],
  } as const
);

const StyledText = styled(
  Text,
  {
    color: '$text700',
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
    textTransform: 'uppercase',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  } as const
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

    color: '$background500',
  },
  {
    componentName: 'BaseIcon',
    resolveProps: ['stroke', 'fill'],
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

const Badge = StyledRoot;

export { Badge, StyledIcon as BadgeIcon, StyledText as BadgeText };
