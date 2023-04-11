import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectSectionHeaderText = (StyledSelectSectionHeaderText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectSectionHeaderText {...props} ref={ref}>
        {children}
      </StyledSelectSectionHeaderText>
    );
  });
