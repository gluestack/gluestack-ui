'use client';

import React, { useCallback, useMemo } from 'react';
import {
  View,
  Pressable,
  TextInput,
  Text,
  Platform,
  Modal,
} from 'react-native';
import DateTimePickerNative from '@react-native-community/datetimepicker';
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
import { withUniwind } from 'uniwind';
import { PrimitiveIcon as _PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
import {
  dateTimePickerStyle,
  dateTimePickerTriggerStyle,
  dateTimePickerInputStyle,
  dateTimePickerIconStyle,
} from './styles';

const PrimitiveIcon = withUniwind(_PrimitiveIcon);
const WrappedTextInput = withUniwind(TextInput);

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
  display?: 'modal' | 'inline'; // iOS only: 'modal' shows picker in modal with backdrop, 'inline' shows picker directly
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
  Input: WrappedTextInput,
  Icon: UIIcon,
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
    display = 'modal', // Default to modal for iOS
    children,
    ...props
  },
  ref
) {
  const handleNativeChange = useCallback(
    (event: any, selectedDate?: Date) => {
      // The native picker handles its own close
      if (selectedDate) {
        onChange?.(selectedDate);
      }
    },
    [onChange]
  );

  // On iOS, use custom trigger + spinner in modal or inline
  if (Platform.OS === 'ios') {
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
        {/* iOS spinner picker shown in modal or inline based on display prop */}
        <IOSDateTimePicker
          value={value}
          mode={mode}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
          is24Hour={is24Hour}
          display={display}
          onChange={handleNativeChange}
        />
      </DateTimePickerProvider>
    );
  }

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
      {/* Native picker is rendered directly on Android */}
      <DateTimePickerNativeWrapper
        value={value}
        mode={mode}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
        is24Hour={is24Hour}
        onChange={handleNativeChange}
      />
    </DateTimePickerProvider>
  );
});

// Separate component to handle the native picker display (Android only)
function DateTimePickerNativeWrapper({
  value,
  mode,
  minimumDate,
  maximumDate,
  timeZoneOffsetInMinutes,
  is24Hour,
  onChange,
}: {
  value?: Date;
  mode: DateTimePickerMode;
  minimumDate?: Date;
  maximumDate?: Date;
  timeZoneOffsetInMinutes?: number;
  is24Hour?: boolean;
  onChange: (event: any, date?: Date) => void;
}) {
  const { isOpen, setIsOpen } = useDateTimePicker();

  const handleChange = useCallback(
    (event: any, selectedDate?: Date) => {
      setIsOpen(false);
      onChange(event, selectedDate);
    },
    [onChange, setIsOpen]
  );

  // Android doesn't support 'datetime' mode - use two-step picker
  if (mode === 'datetime') {
    return (
      <AndroidDateTimePicker
        value={value}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        is24Hour={is24Hour}
        isOpen={isOpen}
        onChange={onChange}
        setIsOpen={setIsOpen}
      />
    );
  }

  // Android: Use display="default" which opens system dialogs for date/time
  if (!isOpen) return null;

  return (
    <DateTimePickerNative
      key={`picker-${mode}`}
      value={value || new Date()}
      mode={mode}
      display="default"
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
      is24Hour={is24Hour}
      onChange={handleChange}
    />
  );
}

// Android-specific datetime picker (uses two separate pickers)
function AndroidDateTimePicker({
  value,
  minimumDate,
  maximumDate,
  is24Hour,
  isOpen,
  onChange,
  setIsOpen,
}: {
  value?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  is24Hour?: boolean;
  isOpen: boolean;
  onChange: (event: any, date?: Date) => void;
  setIsOpen: (open: boolean) => void;
}) {
  const [step, setStep] = React.useState<'date' | 'time' | null>(null);
  const [tempDate, setTempDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    if (isOpen) {
      setStep('date');
      setTempDate(value || new Date());
    } else {
      setStep(null);
    }
  }, [isOpen, value]);

  const handleDateChange = React.useCallback(
    (event: any, selectedDate?: Date) => {
      if (selectedDate) {
        setTempDate(selectedDate);
        setStep('time');
      } else {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  const handleTimeChange = React.useCallback(
    (event: any, selectedTime?: Date) => {
      setIsOpen(false);
      setStep(null);
      if (selectedTime && tempDate) {
        // Combine date and time
        const combinedDate = new Date(tempDate);
        combinedDate.setHours(selectedTime.getHours());
        combinedDate.setMinutes(selectedTime.getMinutes());
        onChange(event, combinedDate);
      } else if (selectedTime) {
        onChange(event, selectedTime);
      }
    },
    [tempDate, onChange, setIsOpen]
  );

  if (!isOpen || !step) return null;

  if (step === 'date') {
    return (
      <DateTimePickerNative
        key="android-date"
        value={tempDate || new Date()}
        mode="date"
        display="default"
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onChange={handleDateChange}
      />
    );
  }

  return (
    <DateTimePickerNative
      key="android-time"
      value={tempDate || new Date()}
      mode="time"
      display="default"
      is24Hour={is24Hour}
      onChange={handleTimeChange}
    />
  );
}

// iOS-specific picker with spinner in modal or inline
function IOSDateTimePicker({
  value,
  mode,
  minimumDate,
  maximumDate,
  timeZoneOffsetInMinutes,
  is24Hour,
  display,
  onChange,
}: {
  value?: Date;
  mode: DateTimePickerMode;
  minimumDate?: Date;
  maximumDate?: Date;
  timeZoneOffsetInMinutes?: number;
  is24Hour?: boolean;
  display: 'modal' | 'inline';
  onChange: (event: any, date?: Date) => void;
}) {
  const { isOpen, setIsOpen } = useDateTimePicker();
  const [tempValue, setTempValue] = React.useState(value || new Date());

  // Update temp value when picker opens
  React.useEffect(() => {
    if (isOpen) {
      setTempValue(value || new Date());
    }
  }, [isOpen, value]);

  const handleChange = React.useCallback(
    (event: any, selectedDate?: Date) => {
      if (selectedDate) {
        setTempValue(selectedDate);
        // Update the parent immediately for live feedback
        onChange(event, selectedDate);
      }
    },
    [onChange]
  );

  const handleDone = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleCancel = React.useCallback(() => {
    setIsOpen(false);
    // Revert to original value
    if (value) {
      onChange({ type: 'dismissed' }, value);
    }
  }, [setIsOpen, onChange, value]);

  if (!isOpen) return null;

  // Inline mode: show picker directly without modal
  if (display === 'inline') {
    return (
      <View className="w-full">
        <DateTimePickerNative
          value={tempValue}
          mode={mode}
          display="spinner"
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
          is24Hour={is24Hour}
          onChange={handleChange}
        />
      </View>
    );
  }

  // Modal mode: show picker in modal with backdrop
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <View className="flex-1 justify-end">
        {/* Backdrop - separate touchable area */}
        <Pressable
          className="absolute inset-0 bg-black/50"
          onPress={handleCancel}
        />
        {/* Picker container */}
        <View className="bg-background rounded-t-lg p-4 relative">
          <View className="flex-row justify-between items-center mb-4 border-b border-border pb-2">
            <Pressable onPress={handleCancel}>
              <Text className="text-primary font-semibold text-base">
                Cancel
              </Text>
            </Pressable>
            <Text className="text-foreground font-semibold text-base">
              {mode === 'date'
                ? 'Select Date'
                : mode === 'time'
                  ? 'Select Time'
                  : 'Select Date & Time'}
            </Text>
            <Pressable onPress={handleDone}>
              <Text className="text-primary font-semibold text-base">Done</Text>
            </Pressable>
          </View>
          <DateTimePickerNative
            value={tempValue}
            mode={mode}
            display="spinner"
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            is24Hour={is24Hour}
            onChange={handleChange}
          />
        </View>
      </View>
    </Modal>
  );
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
      style={{ pointerEvents: 'none' }}
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
