import React from 'react';
import { Text } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerInputProps } from './types';

export const DateTimePickerInput = React.forwardRef<
  Text,
  DateTimePickerInputProps
>((props, ref) => {
  const { placeholder, children, ...rest } = props;
  const { getDisplayValue } = useDateTimePickerContext();

  const displayValue = getDisplayValue();

  return (
    <Text ref={ref} {...rest}>
      {children || displayValue || placeholder || ''}
    </Text>
  );
});

DateTimePickerInput.displayName = 'DateTimePickerInput';
