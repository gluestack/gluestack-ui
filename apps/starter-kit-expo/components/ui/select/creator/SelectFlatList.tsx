import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectFlatList = (StyledSelectFlatList: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return (
        <>
          {props.data.map((item: any) => {
            return props.renderItem({ item });
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
