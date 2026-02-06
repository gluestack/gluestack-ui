'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { View, Pressable, TextInput } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import {
  createDateTimePicker,
  DateTimePickerProvider,
  useDateTimePicker,
} from '@gluestack-ui/core/date-time-picker/creator';
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
  return (
    <DateTimePickerProvider
      value={value}
      onChange={onChange}
      mode={mode}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      locale={locale}
      timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
      is24Hour={is24Hour}
      disabled={disabled}
      placeholder={placeholder}
      format={format}
    >
      <UIDateTimePicker
        className={dateTimePickerStyle({ class: className })}
        ref={ref}
        {...props}
      >
        {children}
      </UIDateTimePicker>
      <WebDateTimePickerContent />
    </DateTimePickerProvider>
  );
});

function WebDateTimePickerContent() {
  const { value, onChange, mode, minimumDate, maximumDate, isOpen, setIsOpen } =
    useDateTimePicker();

  const [tempDate, setTempDate] = useState(value || new Date());

  const handleDateChange = useCallback((newDate: Date) => {
    setTempDate(newDate);
  }, []);

  const handleConfirm = useCallback(() => {
    onChange?.(tempDate);
    setIsOpen(false);
  }, [tempDate, onChange, setIsOpen]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="absolute inset-0 z-50 items-center justify-center bg-black/50"
      onTouchStart={handleCancel}
    >
      <Animated.View
        entering={SlideInUp}
        exiting={SlideOutDown}
        className="bg-background rounded-lg shadow-xl overflow-hidden min-w-[320px] max-w-[90vw]"
        onTouchStart={(e) => e.stopPropagation()}
      >
        <View className="p-4 border-b border-border">
          <input
            type={
              mode === 'time'
                ? 'time'
                : mode === 'date'
                  ? 'date'
                  : 'datetime-local'
            }
            value={formatDateForInput(tempDate, mode)}
            min={
              minimumDate ? formatDateForInput(minimumDate, mode) : undefined
            }
            max={
              maximumDate ? formatDateForInput(maximumDate, mode) : undefined
            }
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            className="w-full p-2 border border-border rounded bg-background text-foreground"
          />
        </View>
        <View className="flex-row justify-end p-4 gap-2">
          <Pressable
            onPress={handleCancel}
            className="px-4 py-2 rounded bg-muted"
          >
            <span className="text-muted-foreground">Cancel</span>
          </Pressable>
          <Pressable
            onPress={handleConfirm}
            className="px-4 py-2 rounded bg-primary"
          >
            <span className="text-primary-foreground">Confirm</span>
          </Pressable>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

function formatDateForInput(date: Date, mode: DateTimePickerMode): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  if (mode === 'date') {
    return `${year}-${month}-${day}`;
  } else if (mode === 'time') {
    return `${hours}:${minutes}`;
  } else {
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}

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
  const { disabled, setIsOpen } = useDateTimePicker();

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
  const { value, placeholder, format } = useDateTimePicker();

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
};
