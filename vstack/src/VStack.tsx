import React, { forwardRef } from 'react';
import type { IVStackProps } from './types';

export function VStack<StyledVStackProps>(
  Root: React.ComponentType<StyledVStackProps>
) {
  return forwardRef(
    (
      { children, ...props }: StyledVStackProps & IVStackProps,
      ref?: any
    ) => {

      return (
        <Root ref={ref} {...(props as StyledVStackProps)}>
          {children}
        </Root>
      );
    }
  );
}
