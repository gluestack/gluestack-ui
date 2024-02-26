import React from 'react';
import { createButton } from '@gluestack-ui/button';

import {
  tva,
  withStyleContextAndStates,
  useStyleContext,
  withStyleContext,
  cssInterop,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';

import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  Platform,
} from 'react-native';

const UIButton = createButton({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: View,
});

cssInterop(UIButton, { className: 'style' });
cssInterop(UIButton.Text, { className: 'style' });
cssInterop(UIButton.Group, { className: 'style' });
cssInterop(UIButton.Spinner, { className: 'style' });
cssInterop(UIButton.Icon, { className: 'style' });

const buttonStyle = tva({
  base: 'group/button rounded-lg bg-primary-500 flex-row items-center justify-center data-[focus=true]:web:outline-none data-[focus-visible=true]:web:ring-2 ',
  variants: {
    action: {
      primary:
        'bg-primary-500 hover:bg-primary-600 active:bg-primary-700  border-primary-300 hover:border-primary-400 active:border-primary-500 data-[focus-visible=true]:web:ring-primary-500',
      secondary:
        'bg-secondary-500 border-secondary-300 hover:bg-secondary-600 hover:border-secondary-400 active:bg-secondary-700 active:border-secondary-500 data-[focus-visible=true]:web:ring-secondary-500',
      positive:
        'bg-success-500 border-success-300 hover:bg-success-600 hover:border-success-400 active:bg-success-700 active:border-success-500 data-[focus-visible=true]:web:ring-success-500',
      negative:
        'bg-error-500 border-error-300 hover:bg-error-600 hover:border-error-400 active:bg-error-700 active:border-error-500 data-[focus-visible=true]:web:ring-error-500',
      default: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
    variant: {
      link: 'px-0',
      outline:
        'bg-transparent border hover:bg-background-50 active:bg-transparent',
      solid: '',
    },

    size: {
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
  ],
});

type IButtonProps = React.ComponentProps<typeof UIButton> &
  VariantProps<typeof buttonStyle>;

type IButtonTextProps = React.ComponentProps<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle>;
const Button = React.forwardRef(
  (
    {
      className,
      variant = 'solid',
      size = 'md',
      action = 'primary',
      ...props
    }: { className?: string } & IButtonProps,
    ref
  ) => {
    return (
      <UIButton
        // @ts-ignore
        ref={ref}
        {...props}
        className={buttonStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);

type IButtonIcon = React.ComponentProps<typeof UIButton.Icon> & {
  as?: any;
};
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
    } = useStyleContext();

    return (
      <UIButton.Text
        // @ts-ignore
        ref={ref}
        {...props}
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

const ButtonIcon = ({
  className,
  as: AsComp,
  ...props
}: IButtonIcon & { className?: any }) => {
  if (AsComp) {
    return <AsComp className={className} {...props} />;
  }
  return <UIButton.Icon className={className} {...props} />;
};
Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonIcon.displayName = 'ButtonIcon';

export { Button, ButtonText, ButtonSpinner, ButtonIcon };
