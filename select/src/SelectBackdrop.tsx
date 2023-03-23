import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectBackdrop = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <Actionsheet.Backdrop {...props} ref={ref}>
        {children}
      </Actionsheet.Backdrop>
    );
  });
