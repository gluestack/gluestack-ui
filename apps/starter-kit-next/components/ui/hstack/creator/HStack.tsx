import React, { forwardRef } from 'react';

export function HStack<StyledHStackProps>(
  Root: React.ComponentType<StyledHStackProps>
) {
  return forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <Root ref={ref} {...(props as StyledHStackProps)}>
        {children}
      </Root>
    );
  });
}
