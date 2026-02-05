'use client';
import { Text, View } from 'react-native';
import React from 'react';
import { createFormControl } from '@gluestack-ui/core/form-control/creator';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { UIIcon } from '@gluestack-ui/core/icon/creator';

const SCOPE = 'FORM_CONTROL';

const formControlStyle = tva({
  base: 'flex flex-col',
});

const formControlErrorIconStyle = tva({
  base: 'text-destructive fill-none h-[18px] w-[18px]',
});

const formControlErrorStyle = tva({
  base: 'flex flex-row justify-start items-center mt-1 gap-1',
});

const formControlErrorTextStyle = tva({
  base: 'text-destructive text-xs font-body',
  variants: {
    isTruncated: {
      true: 'web:truncate',
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
});

const formControlHelperStyle = tva({
  base: 'flex flex-row justify-start items-center mt-1 font-body',
});

const formControlHelperTextStyle = tva({
  base: 'text-foreground/70 font-body text-sm',
  variants: {
    isTruncated: {
      true: 'web:truncate',
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
});

const formControlLabelStyle = tva({
  base: 'flex flex-row justify-start items-center mb-1',
});

const formControlLabelTextStyle = tva({
  base: 'font-medium text-foreground text-base font-body',
  variants: {
    isTruncated: {
      true: 'web:truncate',
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
});

const formControlLabelAstrickStyle = tva({
  base: 'font-medium text-typography text-base',
  variants: {
    isTruncated: {
      true: 'web:truncate',
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
});

type IFormControlLabelAstrickProps = React.ComponentPropsWithoutRef<
  typeof Text
> &
  VariantProps<typeof formControlLabelAstrickStyle>;

const FormControlLabelAstrick = React.forwardRef<
  React.ComponentRef<typeof Text>,
  IFormControlLabelAstrickProps
>(function FormControlLabelAstrick({ className, ...props }, ref) {
  return (
    <Text
      ref={ref}
      className={formControlLabelAstrickStyle({
        class: className,
      })}
      {...props}
    />
  );
});

export const UIFormControl = createFormControl({
  Root: withStyleContext(View, SCOPE),
  Error: View,
  ErrorText: Text,
  ErrorIcon: UIIcon,
  Label: View,
  LabelText: Text,
  LabelAstrick: FormControlLabelAstrick,
  Helper: View,
  HelperText: Text,
});

cssInterop(UIIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

type IFormControlProps = React.ComponentProps<typeof UIFormControl> &
  VariantProps<typeof formControlStyle>;

const FormControl = React.forwardRef<
  React.ComponentRef<typeof UIFormControl>,
  IFormControlProps
>(function FormControl({ className, ...props }, ref) {
  return (
    <UIFormControl
      ref={ref}
      className={formControlStyle({ class: className })}
      {...props}
    />
  );
});

type IFormControlErrorProps = React.ComponentProps<typeof UIFormControl.Error> &
  VariantProps<typeof formControlErrorStyle>;

const FormControlError = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Error>,
  IFormControlErrorProps
>(function FormControlError({ className, ...props }, ref) {
  return (
    <UIFormControl.Error
      ref={ref}
      className={formControlErrorStyle({ class: className })}
      {...props}
    />
  );
});

type IFormControlErrorTextProps = React.ComponentProps<
  typeof UIFormControl.Error.Text
> &
  VariantProps<typeof formControlErrorTextStyle>;

const FormControlErrorText = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Error.Text>,
  IFormControlErrorTextProps
>(function FormControlErrorText({ className, ...props }, ref) {
  return (
    <UIFormControl.Error.Text
      className={formControlErrorTextStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

type IFormControlErrorIconProps = React.ComponentProps<
  typeof UIFormControl.Error.Icon
> &
  VariantProps<typeof formControlErrorIconStyle>;

const FormControlErrorIcon = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Error.Icon>,
  IFormControlErrorIconProps
>(function FormControlErrorIcon({ className, ...props }, ref) {
  return (
    <UIFormControl.Error.Icon
      ref={ref}
      {...props}
      className={formControlErrorIconStyle({ class: className })}
    />
  );
});

type IFormControlLabelProps = React.ComponentProps<typeof UIFormControl.Label> &
  VariantProps<typeof formControlLabelStyle>;

const FormControlLabel = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Label>,
  IFormControlLabelProps
>(function FormControlLabel({ className, ...props }, ref) {
  return (
    <UIFormControl.Label
      ref={ref}
      className={formControlLabelStyle({ class: className })}
      {...props}
    />
  );
});

type IFormControlLabelTextProps = React.ComponentProps<
  typeof UIFormControl.Label.Text
> &
  VariantProps<typeof formControlLabelTextStyle>;

const FormControlLabelText = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Label.Text>,
  IFormControlLabelTextProps
>(function FormControlLabelText({ className, ...props }, ref) {
  return (
    <UIFormControl.Label.Text
      className={formControlLabelTextStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

type IFormControlHelperProps = React.ComponentProps<
  typeof UIFormControl.Helper
> &
  VariantProps<typeof formControlHelperStyle>;

const FormControlHelper = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Helper>,
  IFormControlHelperProps
>(function FormControlHelper({ className, ...props }, ref) {
  return (
    <UIFormControl.Helper
      ref={ref}
      className={formControlHelperStyle({
        class: className,
      })}
      {...props}
    />
  );
});

type IFormControlHelperTextProps = React.ComponentProps<
  typeof UIFormControl.Helper.Text
> &
  VariantProps<typeof formControlHelperTextStyle>;

const FormControlHelperText = React.forwardRef<
  React.ComponentRef<typeof UIFormControl.Helper.Text>,
  IFormControlHelperTextProps
>(function FormControlHelperText({ className, ...props }, ref) {
  return (
    <UIFormControl.Helper.Text
      className={formControlHelperTextStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

FormControl.displayName = 'FormControl';
FormControlError.displayName = 'FormControlError';
FormControlErrorText.displayName = 'FormControlErrorText';
FormControlErrorIcon.displayName = 'FormControlErrorIcon';
FormControlLabel.displayName = 'FormControlLabel';
FormControlLabelText.displayName = 'FormControlLabelText';
FormControlLabelAstrick.displayName = 'FormControlLabelAstrick';
FormControlHelper.displayName = 'FormControlHelper';
FormControlHelperText.displayName = 'FormControlHelperText';

export {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlLabelAstrick,
  FormControlHelper,
  FormControlHelperText,
};
