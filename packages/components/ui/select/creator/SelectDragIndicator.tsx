import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectDragIndicator = (StyledSelectDragIndicator: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectDragIndicator {...props} ref={ref}>
        {children}
      </StyledSelectDragIndicator>
    );
  });
