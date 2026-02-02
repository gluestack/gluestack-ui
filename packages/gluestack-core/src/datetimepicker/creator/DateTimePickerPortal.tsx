import React from 'react';
import { Modal } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerPortalProps } from './types';

export const DateTimePickerPortal = React.forwardRef<
  Modal,
  DateTimePickerPortalProps
>((props, ref) => {
  const { children, ...rest } = props;
  const { isOpen } = useDateTimePickerContext();

  if (!isOpen) return null;

  return (
    <Modal
      ref={ref}
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      {children}
    </Modal>
  );
});

DateTimePickerPortal.displayName = 'DateTimePickerPortal';
