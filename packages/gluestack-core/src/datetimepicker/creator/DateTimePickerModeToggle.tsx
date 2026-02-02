import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerModeToggleProps } from './types';

export const DateTimePickerModeToggle = React.forwardRef<
  View,
  DateTimePickerModeToggleProps
>((props, ref) => {
  const { children, ...rest } = props;
  const { mode, activeView, setActiveView } = useDateTimePickerContext();

  // Only show toggle in datetime mode
  if (mode !== 'datetime') {
    return null;
  }

  if (children) {
    return (
      <View ref={ref} {...rest}>
        {children}
      </View>
    );
  }

  return (
    <View ref={ref} {...rest}>
      <Pressable
        onPress={() => setActiveView('date')}
        data-active={activeView === 'date'}
      >
        <Text>Date</Text>
      </Pressable>
      <Pressable
        onPress={() => setActiveView('time')}
        data-active={activeView === 'time'}
      >
        <Text>Time</Text>
      </Pressable>
    </View>
  );
});

DateTimePickerModeToggle.displayName = 'DateTimePickerModeToggle';
