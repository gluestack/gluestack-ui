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
  TimeInputMeridiem: Pressable,
  TimeInputMeridiemText: Text,
});

cssInterop(UITimeInput, {
  className: {
    target: 'style', // map className->style
  },
});

const timeInputStyle = tva({
  base: 'flex flex-row items-center justify-between w-fit',
  variants: {
    size: {
      xl: 'gap-5',
      lg: 'gap-4',
      md: 'gap-3',
      sm: 'gap-2',
    },
    variant: {
      outlined: '',
      underlined: '',
    },
  },
});

const timeInputFieldStyle = tva({
  base: 'border-background-300 data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[hover=true]:border-background-300  text-center placeholder:text-typography-500',

  parentVariants: {
    size: {
      xl: 'text-xl h-12 w-12',
      lg: 'text-lg h-11 w-11',
      md: 'text-base h-10 w-10',
      sm: 'text-sm h-9 w-9',
    },
    variant: {
      underlined:
        'border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700',
      outlined:
        'rounded border data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-indicator-error',
    },
  },
});

const timeInputMeridiemTextStyle = tva({
  base: 'web:select-none data-[invalid=true]:text-error-700',

  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    variant: {
      outlined: 'text-typography-0',
      underlined: '',
    },
  },
});

const timeInputColonStyle = tva({
  base: 'text-sm font-semibold',
  variants: {
    size: {
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
});

const timeInputMeridiemStyle = tva({
  base: 'rounded flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40',

  parentVariants: {
    size: {
      xl: 'h-12 w-12',
      lg: 'h-11 w-11',
      md: 'h-10 w-10',
      sm: 'h-9 w-9',
    },
    variant: {
      outlined: 'bg-primary-500',
      underlined: 'border border-background-300',
    },
  },
});

type ITimeInputProps = React.ComponentProps<typeof UITimeInput> &
  VariantProps<typeof timeInputStyle> & { className?: string };
const TimeInput = React.forwardRef<
  React.ElementRef<typeof UITimeInput>,
  ITimeInputProps
>(({ className, size = 'md', variant = 'outlined', ...props }, ref) => {
  return (
    <UITimeInput
      ref={ref}
      {...props}
      className={timeInputStyle({ size, class: className })}
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

type ITimeInputFieldMeridiemProps = React.ComponentProps<
  typeof UITimeInput.Meridiem
> &
  VariantProps<typeof timeInputMeridiemStyle> & { className?: string };

const TimeInputMeridiem = React.forwardRef<
  React.ElementRef<typeof UITimeInput.Meridiem>,
  ITimeInputFieldMeridiemProps
>(({ className, ...props }, ref) => {
  const { size: parentSize, variant: parentVariant } = useStyleContext(SCOPE);
  return (
    <UITimeInput.Meridiem
      ref={ref}
      {...props}
      className={timeInputMeridiemStyle({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
        },
        class: className,
      })}
    />
  );
});

type ITimeInputFieldMeridiemTextProps = React.ComponentProps<
  typeof UITimeInput.MeridiemText
> &
  VariantProps<typeof timeInputMeridiemTextStyle> & { className?: string };

const TimeInputMeridiemText = React.forwardRef<
  React.ElementRef<typeof UITimeInput.MeridiemText>,
  ITimeInputFieldMeridiemTextProps
>(({ className, ...props }, ref) => {
  const { size: parentSize, variant: parentVariant } = useStyleContext(SCOPE);

  return (
    <UITimeInput.MeridiemText
      ref={ref}
      {...props}
      className={timeInputMeridiemTextStyle({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
        },
        class: className,
      })}
    />
  );
});

const TimeInputColon = ({ className, ...props }: { className?: string }) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <Text
      className={timeInputColonStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
      {...props}
    >
      :
    </Text>
  );
};

TimeInput.displayName = 'TimeInput';
TimeInputHr.displayName = 'TimeInputHr';
TimeInputMin.displayName = 'TimeInputMin';
TimeInputMeridiem.displayName = 'TimeInputMeridiem';
TimeInputMeridiemText.displayName = 'TimeInputMeridiemText';
TimeInputColon.displayName = 'TimeInputColon';

export {
  TimeInput,
  TimeInputHr,
  TimeInputMin,
  TimeInputMeridiem,
  TimeInputMeridiemText,
  TimeInputColon,
};
