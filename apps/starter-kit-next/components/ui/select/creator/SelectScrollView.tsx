import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectScrollView = (StyledSelectScrollView: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    if (Platform.OS === 'web') {
      return <>{children}</>;
    }
    return (
      <StyledSelectScrollView {...props} ref={ref}>
        {children}
      </StyledSelectScrollView>
    );
  });
