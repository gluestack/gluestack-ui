import React from 'react';
import { View } from 'react-native';
import type { DateTimePickerIconProps } from './types';

export const DateTimePickerIcon = React.forwardRef<
  View,
  DateTimePickerIconProps
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <View ref={ref} {...rest}>
      {children}
    </View>
  );
});

DateTimePickerIcon.displayName = 'DateTimePickerIcon';
