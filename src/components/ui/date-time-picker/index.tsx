'use client';

import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Pressable,
  TextInput,
  Platform,
  Modal,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerNative from '@react-native-community/datetimepicker';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { createDateTimePicker } from '@gluestack-ui/core/date-time-picker/creator';
import { cssInterop } from 'nativewind';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInUp,
  SlideOutDown,
} from 'react-native-reanimated';
import {
  dateTimePickerStyle,
  dateTimePickerTriggerStyle,
  dateTimePickerInputStyle,
  dateTimePickerIconStyle,
} from './styles';

const SCOPE = 'DATE_TIME_PICKER';

export type DateTimePickerMode = 'date' | 'time' | 'datetime';

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  mode?: DateTimePickerMode;
  minimumDate?: Date;
  maximumDate?: Date;
  locale?: string;
  timeZoneOffsetInMinutes?: number;
  is24Hour?: boolean;
  disabled?: boolean;
  placeholder?: string;
  format?: string;
  children?: React.ReactNode;
}

const DateTimePickerTriggerWrapper = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable>
>(function DateTimePickerTriggerWrapper({ ...props }, ref) {
  return <Pressable {...props} ref={ref} />;
});

const UIDateTimePicker = createDateTimePicker({
  Root: withStyleContext(View, SCOPE),
  Trigger: withStyleContext(DateTimePickerTriggerWrapper, SCOPE),
  Input: TextInput,
  Icon: UIIcon,
});

cssInterop(UIDateTimePicker, { className: 'style' });
cssInterop(UIDateTimePicker.Input, {
  className: { target: 'style', nativeStyleToProp: { textAlign: true } },
});
cssInterop(DateTimePickerTriggerWrapper, { className: 'style' });

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

type IDateTimePickerProps = VariantProps<typeof dateTimePickerStyle> &
  DateTimePickerProps & { className?: string };

const DateTimePickerContext = React.createContext<{
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  mode: DateTimePickerMode;
  minimumDate?: Date;
  maximumDate?: Date;
  locale?: string;
  timeZoneOffsetInMinutes?: number;
  is24Hour?: boolean;
  disabled?: boolean;
  placeholder?: string;
  format?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  mode: 'datetime',
  isOpen: false,
  setIsOpen: () => {},
});

const DateTimePicker = React.forwardRef<
  React.ComponentRef<typeof UIDateTimePicker>,
  IDateTimePickerProps
>(function DateTimePicker(
  {
    className,
    value,
    onChange,
    mode = 'datetime',
    minimumDate,
    maximumDate,
    locale,
    timeZoneOffsetInMinutes,
    is24Hour,
    disabled,
    placeholder,
    format,
    children,
    ...props
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    (event: any, selectedDate?: Date) => {
      setIsOpen(false);
      if (selectedDate) {
        onChange?.(selectedDate);
      }
    },
    [onChange]
  );

  return (
    <DateTimePickerContext.Provider
      value={{
        value,
        onChange,
        mode,
        minimumDate,
        maximumDate,
        locale,
        timeZoneOffsetInMinutes,
        is24Hour,
        disabled,
        placeholder,
        format,
        isOpen,
        setIsOpen,
      }}
    >
      <UIDateTimePicker
        className={dateTimePickerStyle({ class: className })}
        ref={ref}
        {...props}
      >
        {children}
      </UIDateTimePicker>
      {isOpen && (
        <DateTimePickerNative
          value={value || new Date()}
          mode={mode}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
          is24Hour={is24Hour}
          onChange={handleChange}
        />
      )}
    </DateTimePickerContext.Provider>
  );
});

type IDateTimePickerTriggerProps = VariantProps<
  typeof dateTimePickerTriggerStyle
> &
  React.ComponentProps<typeof UIDateTimePicker.Trigger> & {
    className?: string;
  };

const DateTimePickerTrigger = React.forwardRef<
  React.ComponentRef<typeof UIDateTimePicker.Trigger>,
  IDateTimePickerTriggerProps
>(function DateTimePickerTrigger(
  { className, size = 'md', variant = 'outline', ...props },
  ref
) {
  const { disabled, setIsOpen } = React.useContext(DateTimePickerContext);

  return (
    <UIDateTimePicker.Trigger
      className={dateTimePickerTriggerStyle({
        class: className,
        size,
        variant,
      })}
      ref={ref}
      context={{ size, variant }}
      disabled={disabled}
      onPress={() => !disabled && setIsOpen(true)}
      {...props}
    />
  );
});

type IDateTimePickerInputProps = VariantProps<typeof dateTimePickerInputStyle> &
  React.ComponentProps<typeof UIDateTimePicker.Input> & { className?: string };

const DateTimePickerInput = React.forwardRef<
  React.ComponentRef<typeof UIDateTimePicker.Input>,
  IDateTimePickerInputProps
>(function DateTimePickerInput({ className, ...props }, ref) {
  const { size: parentSize, variant: parentVariant } = useStyleContext(SCOPE);
  const { value, placeholder, format, disabled } = React.useContext(
    DateTimePickerContext
  );

  const displayValue = useMemo(() => {
    if (!value) return '';
    if (format) {
      return formatDate(value, format);
    }
    return value.toLocaleString();
  }, [value, format]);

  return (
    <UIDateTimePicker.Input
      className={dateTimePickerInputStyle({
        class: className,
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
        },
      })}
      ref={ref}
      value={displayValue}
      placeholder={placeholder}
      editable={false}
      pointerEvents="none"
      {...props}
    />
  );
});

type IDateTimePickerIconProps = VariantProps<typeof dateTimePickerIconStyle> &
  React.ComponentProps<typeof UIDateTimePicker.Icon> & { className?: string };

const DateTimePickerIcon = React.forwardRef<
  React.ComponentRef<typeof UIDateTimePicker.Icon>,
  IDateTimePickerIconProps
>(function DateTimePickerIcon({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIDateTimePicker.Icon
        ref={ref}
        {...props}
        className={dateTimePickerIconStyle({ class: className })}
        size={size}
      />
    );
  }

  return (
    <UIDateTimePicker.Icon
      className={dateTimePickerIconStyle({
        class: className,
        size,
        parentVariants: {
          size: parentSize,
        },
      })}
      ref={ref}
      {...props}
    />
  );
});

function formatDate(date: Date, format: string): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return format
    .replace('YYYY', date.getFullYear().toString())
    .replace('MM', pad(date.getMonth() + 1))
    .replace('DD', pad(date.getDate()))
    .replace('HH', pad(date.getHours()))
    .replace('mm', pad(date.getMinutes()))
    .replace('ss', pad(date.getSeconds()));
}

export {
  DateTimePicker,
  DateTimePickerTrigger,
  DateTimePickerInput,
  DateTimePickerIcon,
  DateTimePickerContext,
};
