import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectVirtualizedList = (StyledSelectVirtualizedList: any) =>
  forwardRef(
    ({ children, data, renderItem, getItem, ...props }: any, ref: any) => {
      if (Platform.OS === 'web') {
        return (
          <>
            {data.map((_: any, index: any) => {
              const item = getItem(data, index);
              return renderItem({ item });
            })}
          </>
        );
      }
      return (
        <StyledSelectVirtualizedList {...props} ref={ref}>
          {children}
        </StyledSelectVirtualizedList>
      );
    }
  );
