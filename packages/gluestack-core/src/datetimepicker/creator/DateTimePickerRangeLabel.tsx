import React from 'react';
import { View, Text } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerRangeLabelProps } from './types';

export const DateTimePickerRangeLabel = React.forwardRef<
  View,
  DateTimePickerRangeLabelProps
>((props, ref) => {
  const { type, children, ...rest } = props;
  const { rangeSelection, rangeStep } = useDateTimePickerContext();

  // Only show in range selection mode
  if (!rangeSelection) {
    return null;
  }

  const isActive = rangeStep === type;

  if (children) {
    return (
      <View ref={ref} data-active={isActive} {...rest}>
        {children}
      </View>
    );
  }

  return (
    <View ref={ref} data-active={isActive} {...rest}>
      <Text>{type === 'start' ? 'Start Date' : 'End Date'}</Text>
    </View>
  );
});

DateTimePickerRangeLabel.displayName = 'DateTimePickerRangeLabel';
