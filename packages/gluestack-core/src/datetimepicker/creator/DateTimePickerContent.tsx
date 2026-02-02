import React from 'react';
import { View } from 'react-native';
import type { DateTimePickerContentProps } from './types';

export const DateTimePickerContent = React.forwardRef<
  View,
  DateTimePickerContentProps
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <View ref={ref} {...rest}>
      {children}
    </View>
  );
});

DateTimePickerContent.displayName = 'DateTimePickerContent';
