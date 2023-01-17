import React, { forwardRef } from 'react';
import type { IBoxProps } from './types';

export function Box<T>(StyledBox: React.ComponentType<T>) {
  return forwardRef(({ children, ...props }: T & IBoxProps, ref: any) => {
    return (
      <StyledBox ref={ref} {...(props as T)}>
        {children}
      </StyledBox>
    );
  });
}
