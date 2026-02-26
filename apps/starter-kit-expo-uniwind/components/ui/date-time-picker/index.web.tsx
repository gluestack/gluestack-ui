'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { View, Pressable, TextInput } from 'react-native';
import { Calendar } from '@/components/ui/calendar';
import { PrimitiveIcon } from '@gluestack-ui/core/icon/creator';

type DateTimePickerMode = 'date' | 'time' | 'datetime';

interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  mode?: DateTimePickerMode;
  minimumDate?: Date;
  maximumDate?: Date;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  style?: any;
}

const DateTimePicker = React.forwardRef<
  React.ComponentRef<typeof View>,
  DateTimePickerProps
>(function DateTimePicker(
  {
    value,
    onChange,
    mode = 'datetime',
    minimumDate,
    maximumDate,
    disabled,
    placeholder = 'Select date/time',
    className,
    style,
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState<Date | undefined>(value);
  const [tempTime, setTempTime] = useState(
    value ? formatTimeForInput(value) : ''
  );

  const handleDateSelect = useCallback(
    (date: Date | Date[] | { from: Date; to: Date }) => {
      if (date instanceof Date) {
        setTempDate(date);
        if (mode === 'date') {
          onChange?.(date);
          setIsOpen(false);
        }
      }
    },
    [mode, onChange]
  );

  const handleTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTempTime(e.target.value);
    },
    []
  );

  const handleConfirm = useCallback(() => {
    if (mode === 'time' && tempTime) {
      const [hours, minutes] = tempTime.split(':').map(Number);
      const newDate = new Date();
      newDate.setHours(hours, minutes, 0, 0);
      onChange?.(newDate);
    } else if (tempDate) {
      if (mode === 'datetime' && tempTime) {
        const [hours, minutes] = tempTime.split(':').map(Number);
        const combinedDate = new Date(tempDate);
        combinedDate.setHours(hours, minutes, 0, 0);
        onChange?.(combinedDate);
      } else {
        onChange?.(tempDate);
      }
    }
    setIsOpen(false);
  }, [mode, tempDate, tempTime, onChange]);

  const handleCancel = useCallback(() => {
    setTempDate(value);
    setTempTime(value ? formatTimeForInput(value) : '');
    setIsOpen(false);
  }, [value]);

  const displayValue = useMemo(() => {
    if (!value) return '';
    if (mode === 'time') return formatTimeForInput(value);
    if (mode === 'date') return formatDate(value);
    return `${formatDate(value)} ${formatTimeForInput(value)}`;
  }, [value, mode]);

  return (
    <View ref={ref} className={`relative ${className || ''}`} style={style}>
      {/* Trigger Input */}
      <Pressable
        onPress={() => !disabled && setIsOpen(true)}
        className="w-full"
      >
        <View className="flex-row items-center border border-border rounded-md px-3 py-2 bg-background">
          <TextInput
            value={displayValue || placeholder}
            editable={false}
            className="flex-1 text-foreground text-sm"
            pointerEvents="none"
          />
        </View>
      </Pressable>

      {/* Modal/Dropdown */}
      {isOpen && (
        <View className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 z-50">
          {/* Date Picker */}
          {(mode === 'date' || mode === 'datetime') && (
            <View className="mb-4">
              <Calendar
                mode="single"
                selected={tempDate}
                onSelect={handleDateSelect}
                initialDate={tempDate}
                minDate={minimumDate}
                maxDate={maximumDate}
              />
            </View>
          )}

          {/* Time Picker */}
          {(mode === 'time' || mode === 'datetime') && (
            <View className="mb-4">
              <input
                type="time"
                value={tempTime}
                onChange={handleTimeChange}
                className="w-full p-2 border border-border rounded bg-background text-foreground text-sm"
                aria-label="Time"
              />
            </View>
          )}

          {/* Actions */}
          <View className="flex-row justify-end gap-2">
            <Pressable
              onPress={handleCancel}
              className="px-4 py-2 rounded bg-muted"
            >
              <span className="text-muted-foreground text-sm">Cancel</span>
            </Pressable>
            <Pressable
              onPress={handleConfirm}
              className="px-4 py-2 rounded bg-primary"
            >
              <span className="text-primary-foreground text-sm">Confirm</span>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
});

// Helper functions
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatTimeForInput(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Export additional components (simplified versions)
const DateTimePickerTrigger = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable>
>(function DateTimePickerTrigger({ children, ...props }, ref) {
  return (
    <Pressable ref={ref} {...props}>
      {children}
    </Pressable>
  );
});

const DateTimePickerInput = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  React.ComponentProps<typeof TextInput>
>(function DateTimePickerInput(props, ref) {
  return <TextInput ref={ref} {...props} />;
});

const DateTimePickerIcon = React.forwardRef<
  React.ComponentRef<typeof PrimitiveIcon>,
  React.ComponentProps<typeof PrimitiveIcon>
>(function DateTimePickerIcon(props, ref) {
  return <PrimitiveIcon ref={ref} {...props} />;
});

export {
  DateTimePicker,
  DateTimePickerTrigger,
  DateTimePickerInput,
  DateTimePickerIcon,
};
export type { DateTimePickerProps, DateTimePickerMode };
