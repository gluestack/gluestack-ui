import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectContent = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <>{children}</>;
    }
    return (
      <Actionsheet.Content {...props} ref={ref}>
        {children}
      </Actionsheet.Content>
    );
  });
