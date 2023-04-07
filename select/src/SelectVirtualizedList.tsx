import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectVirtualizedList = (StyledSelectVirtualizedList: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return (
        <>
          {props.data.map((_: any, index: any) => {
            const item = props.getItem(props.data, index);
            return props.renderItem({ item });
          })}
        </>
      );
    }
    return (
      <StyledSelectVirtualizedList {...props} ref={ref}>
        {children}
      </StyledSelectVirtualizedList>
    );
  });
