import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectSectionList = (StyledSelectSectionList: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectSectionList {...props} ref={ref}>
        {children}
      </StyledSelectSectionList>
    );
  });
