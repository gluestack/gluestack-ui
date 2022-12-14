import React, { forwardRef } from 'react';

export const Center = ({ StyledCenter }: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledCenter ref={ref} {...props}>
        {children}
      </StyledCenter>
    );
  });
