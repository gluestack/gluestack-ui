import React, { createContext, useContext, useState, useCallback } from 'react';

export type DateTimePickerMode = 'date' | 'time' | 'datetime';

export interface DateTimePickerContextValue {
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
}

export const DateTimePickerContext = createContext<DateTimePickerContextValue>({
  mode: 'datetime',
  isOpen: false,
  setIsOpen: () => {},
});

export const useDateTimePicker = () => useContext(DateTimePickerContext);

export interface DateTimePickerProviderProps {
  children: React.ReactNode;
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
}

export const DateTimePickerProvider: React.FC<DateTimePickerProviderProps> = ({
  children,
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
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    (date: Date | undefined) => {
      onChange?.(date);
    },
    [onChange]
  );

  return (
    <DateTimePickerContext.Provider
      value={{
        value,
        onChange: handleChange,
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
      {children}
    </DateTimePickerContext.Provider>
  );
};
