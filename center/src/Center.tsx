import React, { forwardRef } from 'react';
import type { ICenterProps } from './types';

export function Center<T>(StyledCenter: React.ComponentType<T>) {
  return forwardRef(({ children, ...props }: T & ICenterProps, ref: any) => {
    return (
      <StyledCenter ref={ref} {...(props as T)}>
        {children}
      </StyledCenter>
    );
  });
}
