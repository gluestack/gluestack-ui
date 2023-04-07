import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectBackdrop = (StyledSelectBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectBackdrop {...props} ref={ref}>
        {children}
      </StyledSelectBackdrop>
    );
  });
