import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectItemIcon = (StyledSelectItemIcon: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectItemIcon {...props} ref={ref}>
        {children}
      </StyledSelectItemIcon>
    );
  });
