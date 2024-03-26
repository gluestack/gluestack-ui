'use client';
import { createToast, createToastHook } from '@gluestack-ui/toast';
import {
  AnimatePresence,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { styled } from '@gluestack-style/react';
import { Text, View } from 'react-native';

const StyledRoot = styled(
  View,
  {
    px: '$4',
    py: '$3',
    borderRadius: '$sm',
    flexDirection: 'row',
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
        attention: {
          bg: '$backgroundMuted',
          borderColor: '$secondary300',

          _icon: {
            color: '$secondary600',
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
    m: '$3',

    _web: {
      pointerEvents: 'auto',
    },
    defaultProps: {
      hardShadow: '5',
      variant: 'solid',
      action: 'attention',
    },
  },
  { descendantStyle: ['_icon', '_title', '_description'] }
);
const StyledTitle = styled(
  Text,
  {
    color: '$text700',
    fontWeight: '$medium',
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

    props: {
      size: 'md',
    },
  },
  { ancestorStyle: ['_title'] }
);

const StyledDescription = styled(
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

    props: {
      size: 'sm',
    },
  },
  { ancestorStyle: ['_description'] }
);
const AnimationWrapper = styled(AnimatedView, {});

export const useToast = createToastHook(AnimationWrapper, AnimatePresence);

export const Toast = createToast({
  Root: StyledRoot,
  Title: StyledTitle,
  Description: StyledDescription,
});
export const ToastTitle = Toast.Title;
export const ToastDescription = Toast.Description;
