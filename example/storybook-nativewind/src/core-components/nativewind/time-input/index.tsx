'use client';
import React from 'react';
import { createTimeInput } from '@gluestack-ui/time-input';
import { View, Pressable, TextInput, Text } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from 'nativewind';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const SCOPE = 'TIMEINPUT';

const UITimeInput = createTimeInput({
  Root: withStyleContext(View, SCOPE),
  TimeInputHr: TextInput,
  TimeInputMin: TextInput,
  TimeInputSec: TextInput,
  TimeInputMeridiem: Pressable,
  TimeInputMeridiemText: Text,
});

cssInterop(UITimeInput, {
  className: {
    target: 'style', // map className->style
  },
});

const timeInputStyle = tva({
  base: 'flex flex-row items-center justify-between',
  variants: {
    size: {
      xl: 'h-12 gap-2',
      lg: 'h-11 gap-2',
      md: 'h-11 w-8 gap-2',
      sm: 'h-9 w-6 gap-2',
    },
    variant: {
      underlined: '',
      outlined: '',
      rounded: '',
    },
  },
});
const timeInputFieldStyle = tva({
  base: 'border-background-300 flex-row overflow-hidden content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[hover=true]:border-background-300 items-center w-12 text-center placeholder:text-typography-500',

  parentVariants: {
    size: {
      xl: 'text-xl h-12',
      lg: 'text-lg h-11',
      md: 'text-base h-10',
      sm: 'text-sm h-9',
    },

    variant: {
      underlined:
        'rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700',

      outlined:
        'rounded border data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-indicator-error',

      rounded:
        'rounded-full border data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-indicator-error',
    },
  },
});

const timeInputMeridiemTextStyle = tva({
  base: 'text-typography-0 font-semibold web:select-none data-[invalid=true]:text-error-400 data-[active=true]:text-error-500',
  parentVariants: {
    variant: {
      underlined: '',
      outlined: '',
      rounded: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
});

const timeInputMeridiemStyle = tva({
  base: 'rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2',
  parentVariants: {
    variant: {
      underlined: '',
      outlined: '',
      rounded: 'rounded-full',
    },
    size: {
      xl: 'h-12 w-12',
      lg: 'h-11 w-11',
      md: 'h-10 w-10',
      sm: 'h-9 w-9',
    },
  },
});

type ITimeInputProps = React.ComponentProps<typeof UITimeInput> &
  VariantProps<typeof timeInputStyle> & { className?: string };
const TimeInput = React.forwardRef<
  React.ElementRef<typeof UITimeInput>,
  ITimeInputProps
>(({ className, variant = 'outlined', size = 'md', ...props }, ref) => {
  return (
    <UITimeInput
      ref={ref}
      {...props}
      className={timeInputStyle({ variant, size, class: className })}
      context={{ variant, size }}
    />
  );
});

type ITimeInputFieldHrProps = React.ComponentProps<typeof UITimeInput.Hr> &
  VariantProps<typeof timeInputFieldStyle> & { className?: string };

const TimeInputHr = React.forwardRef<
  React.ElementRef<typeof UITimeInput.Hr>,
  ITimeInputFieldHrProps
>(({ className, ...props }, ref) => {
  const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITimeInput.Hr
      ref={ref}
      {...props}
      className={timeInputFieldStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

type ITimeInputFieldMinProps = React.ComponentProps<typeof UITimeInput.Min> &
  VariantProps<typeof timeInputFieldStyle> & { className?: string };

const TimeInputMin = React.forwardRef<
  React.ElementRef<typeof UITimeInput.Min>,
  ITimeInputFieldMinProps
>(({ className, ...props }, ref) => {
  const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITimeInput.Min
      ref={ref}
      {...props}
      className={timeInputFieldStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

type ITimeInputFieldSecProps = React.ComponentProps<typeof UITimeInput.Sec> &
  VariantProps<typeof timeInputFieldStyle> & { className?: string };

const TimeInputSec = React.forwardRef<
  React.ElementRef<typeof UITimeInput.Sec>,
  ITimeInputFieldSecProps
>(({ className, ...props }, ref) => {
  const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITimeInput.Sec
      ref={ref}
      {...props}
      className={timeInputFieldStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

type ITimeInputFieldMeridiemProps = React.ComponentProps<
  typeof UITimeInput.Meridiem
> &
  VariantProps<typeof timeInputFieldStyle> & { className?: string };

const TimeInputMeridiem = React.forwardRef<
  React.ElementRef<typeof UITimeInput.Meridiem>,
  ITimeInputFieldMeridiemProps
>(({ className, ...props }, ref) => {
  const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITimeInput.Meridiem
      ref={ref}
      {...props}
      className={timeInputMeridiemStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

type ITimeInputFieldMeridiemTextProps = React.ComponentProps<
  typeof UITimeInput.MeridiemText
> &
  VariantProps<typeof timeInputFieldStyle> & { className?: string };

const TimeInputMeridiemText = React.forwardRef<
  React.ElementRef<typeof UITimeInput.MeridiemText>,
  ITimeInputFieldMeridiemTextProps
>(({ className, ...props }, ref) => {
  const { variant: parentVariant, size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITimeInput.MeridiemText
      ref={ref}
      {...props}
      className={timeInputMeridiemTextStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

TimeInput.displayName = 'TimeInput';
TimeInputHr.displayName = 'TimeInputHr';
TimeInputMin.displayName = 'TimeInputMin';
TimeInputSec.displayName = 'TimeInputSec';
TimeInputMeridiem.displayName = 'TimeInputMeridiem';
TimeInputMeridiemText.displayName = 'TimeInputMeridiemText';

export {
  TimeInput,
  TimeInputHr,
  TimeInputMin,
  TimeInputSec,
  TimeInputMeridiem,
  TimeInputMeridiemText,
};
