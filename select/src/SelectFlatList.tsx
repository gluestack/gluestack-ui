import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectFlatList = (StyledSelectFlatList: any) =>
  forwardRef(({ children, data, renderItem, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return (
        <>
          {data.map((item: any) => {
            return renderItem({ item });
          })}
        </>
      );
    }
    return (
      <StyledSelectFlatList {...props} ref={ref}>
        {children}
      </StyledSelectFlatList>
    );
  });
