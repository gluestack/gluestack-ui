import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectVirtualizedList = (StyledSelectVirtualizedList: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectVirtualizedList {...props} ref={ref}>
        {children}
      </StyledSelectVirtualizedList>
    );
  });
