import React, { forwardRef } from 'react';

const FabLabel = (StyledFabLabel: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledFabLabel ref={ref} {...props}>
        {children}
      </StyledFabLabel>
    );
  });

export default FabLabel;
