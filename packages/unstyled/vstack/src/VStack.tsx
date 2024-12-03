import React, { forwardRef } from 'react';

export function VStack<StyledVStackProps>(
  Root: React.ComponentType<StyledVStackProps>
) {
  return forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <Root ref={ref} {...(props as StyledVStackProps)}>
        {children}
      </Root>
    );
  });
}
