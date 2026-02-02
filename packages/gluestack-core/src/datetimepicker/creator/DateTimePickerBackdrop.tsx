import React from 'react';
import { Pressable, View } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerBackdropProps } from './types';

export const DateTimePickerBackdrop = React.forwardRef<
  View,
  DateTimePickerBackdropProps
>((props, ref) => {
  const { children, onPress, ...rest } = props;
  const { setIsOpen } = useDateTimePickerContext();

  const handlePress = React.useCallback(
    (e: any) => {
      setIsOpen(false);
      onPress?.(e);
    },
    [setIsOpen, onPress]
  );

  return (
    <Pressable ref={ref} onPress={handlePress} {...rest}>
      {children}
    </Pressable>
  );
});

DateTimePickerBackdrop.displayName = 'DateTimePickerBackdrop';
