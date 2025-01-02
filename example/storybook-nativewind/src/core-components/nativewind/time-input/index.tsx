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
      xl: 'h-12 gap-5',
      lg: 'h-11 gap-4',
      md: 'h-11 gap-3',
      sm: 'h-9 gap-2',
    },
  },
});

const timeInputFieldStyle = tva({
  base: 'border-background-300 content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:data-[hover=true]:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[hover=true]:border-background-300  text-center placeholder:text-typography-500',

  parentVariants: {
    size: {
      xl: 'text-xl h-12 w-12',
      lg: 'text-lg h-11 w-11',
      md: 'text-base h-10 w-10',
      sm: 'text-sm h-9 w-9',
    },
    variant: {
      underlined:
        'rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700',
      outlined:
        'rounded border data-[invalid=true]:border-error-700 data-[invalid=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[focus=true]:border-error-700 data-[invalid=true]:data-[focus=true]:data-[hover=true]:border-error-700 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:border-error-700 data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-indicator-primary data-[invalid=true]:web:ring-1 data-[invalid=true]:web:ring-inset data-[invalid=true]:web:ring-indicator-error data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[focus=true]:data-[hover=true]:web:ring-indicator-error data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-1 data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-inset data-[invalid=true]:data-[disabled=true]:data-[hover=true]:web:ring-indicator-error',
    },
  },
});

const timeInputMeridiemTextStyle = tva({
  base: 'text-typography-0 font-semibold web:select-none',

  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
});

const timeInputColumnStyle = tva({
  base: 'text-sm font-semibold',
});

const timeInputMeridiemStyle = tva({
  base: 'rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40',

  parentVariants: {
    size: {
      xl: 'h-12 w-12',
      lg: 'h-11 w-11',
      md: 'h-10 w-10',
      sm: 'h-9 w-9',
    },
  },
});

type ITimeInputProps = React.ComponentProps<typeof UITimeInput> &
  VariantProps<typeof timeInputStyle> & { className?: string } & {
    variant: 'outlined' | 'underlined';
  };
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
  VariantProps<typeof timeInputFieldStyle> & { className?: string };

const TimeInputMeridiem = React.forwardRef<
  React.ElementRef<typeof UITimeInput.Meridiem>,
  ITimeInputFieldMeridiemProps
>(({ className, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);
  return (
    <UITimeInput.Meridiem
      ref={ref}
      {...props}
      className={timeInputMeridiemStyle({
        parentVariants: {
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
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UITimeInput.MeridiemText
      ref={ref}
      {...props}
      className={timeInputMeridiemTextStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
    />
  );
});

const TimeInputColumn = ({ className, ...props }: { className?: string }) => {
  return (
    <Text className={timeInputColumnStyle({ class: className })} {...props}>
      :
    </Text>
  );
};

TimeInput.displayName = 'TimeInput';
TimeInputHr.displayName = 'TimeInputHr';
TimeInputMin.displayName = 'TimeInputMin';
TimeInputMeridiem.displayName = 'TimeInputMeridiem';
TimeInputMeridiemText.displayName = 'TimeInputMeridiemText';
TimeInputColumn.displayName = 'TimeInputColumn';

export {
  TimeInput,
  TimeInputHr,
  TimeInputMin,
  TimeInputMeridiem,
  TimeInputMeridiemText,
  TimeInputColumn,
};
