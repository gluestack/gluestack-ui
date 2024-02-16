import { createFab } from '@gluestack-ui/fab';
import { Platform, Text, View } from 'react-native';
import { Pressable } from 'react-native';
import {
  tva,
  withStyleContext,
  withStyleContextAndStates,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';
import { cssInterop } from 'nativewind';

export const UIFab = createFab({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  Label: Text,
  Icon: View,
});

// @ts-ignore
cssInterop(UIFab, { className: 'style' });
cssInterop(UIFab.Label, { className: 'style' });
cssInterop(UIFab.Icon, { className: 'style' });

const fabStyle = tva({
  base: 'group/fab bg-primary-500 rounded-full z-20 p-4 flex-row items-center justify-center absolute hover:bg-primary-600 active:bg-primary-700 disabled:opacity-40 disabled:pointer-events-all disabled:cursor-not-allowed data-[focus=true]:outline-2 data-[focus=true]:outline-primary-700 data-[focus=true]:outline-solid',
  variants: {
    size: {
      sm: 'px-2.5 py-2.5 text-sm',
      md: 'px-3 py-3 text-md',
      lg: 'px-4 py-4 text-lg',
    },
    placement: {
      'top right': 'top-4 right-4',
      'top left': 'top-4 left-4',
      'bottom right': 'bottom-4 right-4',
      'bottom left': 'bottom-4 left-4',
      'top center': 'top-4 self-center',
      'bottom center': 'bottom-4 self-center',
    },
  },
});

const fabLabelStyle = tva({
  base: 'text-typography-50 font-normal font-body tracking-md text-left mx-2',
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
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const fabIconStyle = tva({
  base: 'text-typography-50 group-hover/fab:text-typography-0 group-active/fab:text-typography-0',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'w-4 h-4',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const Fab = React.forwardRef(
  (
    { size = 'md', placement = 'bottom right', className, ...props }: any,
    ref: any
  ) => {
    return (
      <UIFab
        ref={ref}
        {...props}
        className={fabStyle({ size, placement, class: className })}
        context={{ size }}
      />
    );
  }
);

const FabLabel = React.forwardRef(
  (
    {
      size = 'md',
      isTruncated = false,
      bold = false,
      underline = false,
      strikeThrough = false,
      className,
      ...props
    }: any,
    ref: any
  ) => {
    const { size: parentSize } = useStyleContext();
    return (
      <UIFab.Label
        ref={ref}
        {...props}
        className={fabLabelStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          isTruncated,
          bold,
          underline,
          strikeThrough,
          class: className,
        })}
      />
    );
  }
);

const FabIcon = React.forwardRef(
  ({ size = 'md', className, as: AsComp, ...props }: any, ref: any) => {
    const { size: parentSize } = useStyleContext();
    if (AsComp) {
      return (
        <AsComp
          ref={ref}
          {...props}
          className={fabIconStyle({
            parentVariants: {
              size: parentSize,
            },
            size,
            class: className,
          })}
        />
      );
    }
    return (
      <UIFab.Icon
        ref={ref}
        {...props}
        className={fabIconStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
      />
    );
  }
);

Fab.displayName = 'Fab';
FabLabel.displayName = 'FabLabel';
FabIcon.displayName = 'FabIcon';

export { Fab, FabLabel, FabIcon };
