import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectDragIndicatorWrapper = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <Actionsheet.DragIndicatorWrapper {...props} ref={ref}>
        {children}
      </Actionsheet.DragIndicatorWrapper>
    );
  });
