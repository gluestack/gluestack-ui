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
    fontWeight: '$medium',

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
