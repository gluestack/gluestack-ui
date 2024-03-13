import React from 'react';
import { createToast, createToastHook } from '@gluestack-ui/toast';
import {
  AnimatePresence,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { styled } from '@gluestack-style/react';
import { Text, View } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';

const AnimationWrapper = styled(AnimatedView, {});
export const useToast = createToastHook(AnimationWrapper, AnimatePresence);

export const UIToast = createToast({
  Root: withStyleContext(View),
  Title: Text,
  Description: Text,
});

cssInterop(UIToast, { className: 'style' });
cssInterop(UIToast.Title, { className: 'style' });
cssInterop(UIToast.Description, { className: 'style' });

const toastStyle = tva(
  {
    base: 'px-4 py-3 m-3 rounded-sm flex-row web:pointer-events-auto shadow-lg',
    variants: {
      action: {
        error: 'bg-background-error border-error-300',

        // _icon: {
        //   color: '$error500',
        // },

        warning: 'bg-background-warning border-warning-300',

        //   _icon: {
        //     color: '$warning500',
        //   },
        // },
        success: 'bg-background-success border-success-300',

        // _icon: {
        //   color: '$success500',
        // },
        // },
        info: 'bg-background-info border-info-300',

        // _icon: {
        //   color: '$info500',
        // },
        // },
        attention: 'bg-background-muted border-secondary-30',
        // bg: '$backgroundMuted',
        // borderColor: '$secondary300',

        // _icon: {
        //   color: '$secondary600',
        // },
        // },
      },

      variant: {
        solid: '',
        outline: 'border-1 bg-white border-red-400',
        accent: 'border-l-4',
      },
    },

    defaultVariants: {
      // hardShadow: '5',
      variant: 'solid',
      action: 'attention',
    },
  }
  // { descendantStyle: ['_icon', '_title', '_description'] }
);
const toastTitleStyle = tva({
  base: 'text-typography-700 font-medium font-body tracking-md text-left',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  // { ancestorStyle: ['_title'] }
});

const toastDescriptionStyle = tva(
  {
    base: 'text-typography-700 font-normal font-body tracking-md text-left',
    variants: {
      isTruncated: {
        true: '',
      },
      bold: {
        true: 'font-bold',
      },
      underline: {
        true: 'underline',
      },
      strikeThrough: {
        true: 'line-through',
      },
      size: {
        '2xs': 'text-2xs',
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-md',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
  // { ancestorStyle: ['_description'] }
);

export const Toast = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    return (
      <UIToast
        ref={ref}
        {...props}
        className={toastStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);

export const ToastTitle = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext();

    return (
      <UIToast.Title
        ref={ref}
        {...props}
        className={toastTitleStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);
export const ToastDescription = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext();

    return (
      <UIToast.Description
        ref={ref}
        {...props}
        className={toastDescriptionStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);
