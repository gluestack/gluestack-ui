import React from 'react';
import { View } from 'react-native';
import type { DateTimePickerActionBarProps } from './types';

export const DateTimePickerActionBar = React.forwardRef<
  View,
  DateTimePickerActionBarProps
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <View ref={ref} {...rest}>
      {children}
    </View>
  );
});

DateTimePickerActionBar.displayName = 'DateTimePickerActionBar';
