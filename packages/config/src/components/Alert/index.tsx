import { AsForwarder, styled } from '@gluestack-style/react';
import { createAlert } from '@gluestack-ui/alert';
import { View, Text } from 'react-native';

const StyledRoot = styled(
  View,
  {
    alignItems: 'center',
    p: '$3',
    flexDirection: 'row',
    borderRadius: '$sm',
    variants: {
      action: {
        error: {
          bg: '$backgroundError',
          borderColor: '$error300',

          _icon: {
            color: '$error500',
          },
        },
        warning: {
          bg: '$backgroundWarning',
          borderColor: '$warning300',

          _icon: {
            color: '$warning500',
          },
        },
        success: {
          bg: '$backgroundSuccess',
          borderColor: '$success300',

          _icon: {
            color: '$success500',
          },
        },
        info: {
          bg: '$backgroundInfo',
          borderColor: '$info300',

          _icon: {
            color: '$info500',
          },
        },
        muted: {
          bg: '$backgroundMuted',
          borderColor: '$secondary300',

          _icon: {
            color: '$secondary500',
          },
        },
      },

      variant: {
        solid: {},
        outline: {
          borderWidth: '$1',
          bg: '$white',
        },
        accent: {
          borderLeftWidth: '$4',
        },
      },
    },

    defaultProps: {
      variant: 'solid',
      action: 'info',
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
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

export const Alert = createAlert({
  Root: StyledRoot,
  Text: StyledText,
  Icon: StyledIcon,
});

export const AlertText = Alert.Text;
export const AlertIcon = Alert.Icon;
