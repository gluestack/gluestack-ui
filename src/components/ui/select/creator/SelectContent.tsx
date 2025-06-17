import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectContent = (StyledSelectContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return <>{children}</>;
    }
    return (
      <StyledSelectContent {...props} ref={ref}>
        {children}
      </StyledSelectContent>
    );
  });
