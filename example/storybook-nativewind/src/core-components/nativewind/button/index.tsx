'use client';
import React, { useMemo } from 'react';
import { createButton } from '@gluestack-ui/button';
import { Svg } from 'react-native-svg';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  Platform,
} from 'react-native';

const PrimitiveIcon = React.forwardRef(
  (
    {
      height,
      width,
      fill,
      color,
      size,
      stroke = 'currentColor',
      as: AsComp,
      ...props
    }: any,
    ref?: any
  ) => {
    const sizeProps = useMemo(() => {
      return size ? { size } : { height, width };
    }, [size, height, width]);

    const colorProps =
      stroke === 'currentColor' && color !== undefined ? color : stroke;

    if (AsComp) {
      return (
        <AsComp
          ref={ref}
          fill={fill}
          {...props}
          {...sizeProps}
          stroke={colorProps}
        />
      );
    }
    return (
      <Svg
        ref={ref}
        height={height}
        width={width}
        fill={fill}
        stroke={colorProps}
        {...props}
      />
    );
  }
);

const SCOPE = 'BUTTON';

const Root =
  Platform.OS === 'web'
    ? withStyleContext(Pressable, SCOPE)
    : withStyleContextAndStates(Pressable, SCOPE);

const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: Platform.OS === 'web' ? PrimitiveIcon : withStates(PrimitiveIcon),
});

cssInterop(UIButton, { className: 'style' });
cssInterop(UIButton.Text, { className: 'style' });
cssInterop(UIButton.Group, { className: 'style' });
cssInterop(UIButton.Spinner, { className: 'style' });
cssInterop(UIButton.Icon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      // @ts-ignore
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

const buttonStyle = tva({
  base: 'group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40',
  variants: {
    action: {
      primary:
        'bg-primary-500 hover:bg-primary-600 active:bg-primary-700  border-primary-300 hover:border-primary-400 active:border-primary-500 data-[focus-visible=true]:web:ring-primary-300',
      secondary:
        'bg-secondary-500 border-secondary-300 hover:bg-secondary-600 hover:border-secondary-400 active:bg-secondary-700 active:border-secondary-500 data-[focus-visible=true]:web:ring-secondary-300',
      positive:
        'bg-success-500 border-success-300 hover:bg-success-600 hover:border-success-400 active:bg-success-700 active:border-success-500 data-[focus-visible=true]:web:ring-success-300',
      negative:
        'bg-error-500 border-error-300 hover:bg-error-600 hover:border-error-400 active:bg-error-700 active:border-error-500 data-[focus-visible=true]:web:ring-error-300',
      default: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
    variant: {
      link: 'px-0',
      outline:
        'bg-transparent border hover:bg-background-50 active:bg-transparent',
      solid: '',
    },

    size: {
      xs: 'px-3.5 h-8',
      sm: 'px-4 h-9',
      md: 'px-5 h-10',
      lg: 'px-6 h-11',
    },
  },
  compoundVariants: [
    {
      action: 'primary',
      variant: 'link',
      class: 'px-0 bg-transparent hover:bg-transparent active:bg-transparent',
    },
    {
      action: 'secondary',
      variant: 'link',
      class: 'px-0 bg-transparent hover:bg-transparent active:bg-transparent',
    },
    {
      action: 'positive',
      variant: 'link',
      class: 'px-0 bg-transparent hover:bg-transparent active:bg-transparent',
    },
    {
      action: 'negative',
      variant: 'link',
      class: 'px-0 bg-transparent hover:bg-transparent active:bg-transparent',
    },
    {
      action: 'primary',
      variant: 'outline',
      class: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
    {
      action: 'secondary',
      variant: 'outline',
      class: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
    {
      action: 'positive',
      variant: 'outline',
      class: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
    {
      action: 'negative',
      variant: 'outline',
      class: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
  ],
});

const buttonTextStyle = tva({
  base: 'text-typography-0 font-semibold web:select-none',
  parentVariants: {
    action: {
      primary:
        'text-primary-600 group-hover/button:text-primary-600 group-active/button:text-primary-700',
      secondary:
        'text-secondary-600 group-hover/button:text-secondary-600 group-active/button:text-secondary-700',
      positive:
        'text-success-600 group-hover/button:text-success-600 group-active/button:text-success-700',
      negative:
        'text-error-600 group-hover/button:text-error-600 group-active/button:text-error-700',
    },
    variant: {
      link: 'group-hover/button:underline group-active/button:underline',
      outline: '',
      solid:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'primary',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'solid',
      action: 'secondary',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'solid',
      action: 'positive',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'solid',
      action: 'negative',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'outline',
      action: 'primary',
      class:
        'text-primary-500 group-hover/button:text-primary-500 group-active/button:text-primary-500',
    },
    {
      variant: 'outline',
      action: 'secondary',
      class:
        'text-primary-500 group-hover/button:text-primary-500 group-active/button:text-primary-500',
    },
    {
      variant: 'outline',
      action: 'positive',
      class:
        'text-primary-500 group-hover/button:text-primary-500 group-active/button:text-primary-500',
    },
    {
      variant: 'outline',
      action: 'negative',
      class:
        'text-primary-500 group-hover/button:text-primary-500 group-active/button:text-primary-500',
    },
  ],
});

const buttonIconStyle = tva({
  base: 'fill-none',
  parentVariants: {
    variant: {
      link: 'group-hover/button:underline group-active/button:underline',
      outline: '',
      solid:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
    action: {
      primary:
        'text-primary-600 group-hover/button:text-primary-600 group-active/button:text-primary-700',
      secondary:
        'text-secondary-600 group-hover/button:text-secondary-600 group-active/button:text-secondary-700',
      positive:
        'text-success-600 group-hover/button:text-success-600 group-active/button:text-success-700',

      negative:
        'text-error-600 group-hover/button:text-error-600 group-active/button:text-error-700',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'primary',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'solid',
      action: 'secondary',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'solid',
      action: 'positive',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
    {
      variant: 'solid',
      action: 'negative',
      class:
        'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0',
    },
  ],
});

const buttonGroupStyle = tva({
  base: '',
  variants: {
    space: {
      'xs': 'gap-1',
      'sm': 'gap-2',
      'md': 'gap-3',
      'lg': 'gap-4',
      'xl': 'gap-5',
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
    },
    isAttached: {
      true: 'gap-0',
    },
  },
});

type IButtonProps = Omit<React.ComponentProps<typeof UIButton>, 'context'> &
  VariantProps<typeof buttonStyle>;
const Button = React.forwardRef(
  (
    {
      className,
      variant = 'solid',
      size = 'md',
      action = 'primary',
      ...props
    }: { className?: string } & IButtonProps,
    ref?: any
  ) => {
    return (
      <UIButton
        ref={ref}
        {...props}
        className={buttonStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);

type IButtonTextProps = React.ComponentProps<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle>;
const ButtonText = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      action,
      ...props
    }: { className?: string } & IButtonTextProps,
    ref?: any
  ) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext(SCOPE);

    return (
      <UIButton.Text
        ref={ref}
        {...props}
        // @ts-ignore
        className={buttonTextStyle({
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

const ButtonSpinner = UIButton.Spinner;

type IButtonIcon = React.ComponentProps<typeof UIButton.Icon> &
  VariantProps<typeof buttonIconStyle>;
const ButtonIcon = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: IButtonIcon & {
      className?: any;
      as?: any;
    },
    ref?: any
  ) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext(SCOPE);

    if (typeof size === 'number') {
      return (
        <UIButton.Icon
          ref={ref}
          {...props}
          className={buttonIconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props.height !== undefined || props.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIButton.Icon
          ref={ref}
          {...props}
          className={buttonIconStyle({ class: className })}
        />
      );
    }
    return (
      <UIButton.Icon
        {...props}
        //@ts-ignore
        className={buttonIconStyle({
          parentVariants: {
            size: parentSize,
            variant: parentVariant,
            action: parentAction,
          },
          size,
          class: className,
        })}
        ref={ref}
      />
    );
  }
);

type IButtonGroupProps = React.ComponentProps<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;
const ButtonGroup = React.forwardRef(
  (
    {
      className,
      space = 'md',
      isAttached = false,
      ...props
    }: { className?: string } & IButtonGroupProps,
    ref?: any
  ) => {
    return (
      <UIButton.Group
        className={buttonGroupStyle({ class: className, space, isAttached })}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonIcon.displayName = 'ButtonIcon';
ButtonGroup.displayName = 'ButtonGroup';

export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
