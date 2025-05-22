import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectDragIndicatorWrapper = (
  StyledSelectDragIndicatorWrapper: any
) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectDragIndicatorWrapper {...props} ref={ref}>
        {children}
      </StyledSelectDragIndicatorWrapper>
    );
  });
