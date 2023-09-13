import React, { forwardRef } from 'react';
import type { IHStackProps } from './types';

export function HStack<StyledHStackProps>(
  Root: React.ComponentType<StyledHStackProps>
) {
  return forwardRef(
    ({ children, ...props }: StyledHStackProps & IHStackProps, ref?: any) => {
      return (
        <Root ref={ref} {...(props as StyledHStackProps)}>
          {children}
        </Root>
      );
    }
  );
}
