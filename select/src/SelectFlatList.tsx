import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectFlatList = (StyledSelectFlatList: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return <></>;
    }
    return (
      <StyledSelectFlatList {...props} ref={ref}>
        {children}
      </StyledSelectFlatList>
    );
  });
