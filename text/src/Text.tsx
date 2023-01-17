import React, { forwardRef } from 'react';
import type { TextProps } from './types';

export const Text = <T,>(StyledText: React.ComponentType<T>) =>
  forwardRef(({ children, ...props }: T & TextProps, ref: any) => {
    return (
      <StyledText ref={ref} {...(props as T)}>
        {children}
      </StyledText>
    );
  });
