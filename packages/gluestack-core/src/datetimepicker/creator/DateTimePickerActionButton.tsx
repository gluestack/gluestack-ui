import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerActionButtonProps } from './types';

export const DateTimePickerActionButton = React.forwardRef<
  View,
  DateTimePickerActionButtonProps
>((props, ref) => {
  const { action, children, onPress, ...rest } = props;
  const { handleTodayClick, handleCancelClick, handleConfirmClick } =
    useDateTimePickerContext();

  const handlePress = React.useCallback(
    (e: any) => {
      switch (action) {
        case 'today':
          handleTodayClick();
          break;
        case 'cancel':
          handleCancelClick();
          break;
        case 'confirm':
          handleConfirmClick();
          break;
      }
      onPress?.(e);
    },
    [action, handleTodayClick, handleCancelClick, handleConfirmClick, onPress]
  );

  const defaultLabel = React.useMemo(() => {
    switch (action) {
      case 'today':
        return 'Today';
      case 'cancel':
        return 'Cancel';
      case 'confirm':
        return 'Done';
      default:
        return '';
    }
  }, [action]);

  return (
    <Pressable ref={ref} onPress={handlePress} {...rest}>
      {children || <Text>{defaultLabel}</Text>}
    </Pressable>
  );
});

DateTimePickerActionButton.displayName = 'DateTimePickerActionButton';
