import React, { forwardRef } from 'react';

function FabLabel<StyledFabLabel>(
  StyledFabLabel: React.ComponentType<StyledFabLabel>
) {
  return forwardRef(
    (
      { children, ...props }: StyledFabLabel & { children?: any },
      ref?: any
    ) => {
      return (
        <StyledFabLabel ref={ref} {...(props as StyledFabLabel)}>
          {children}
        </StyledFabLabel>
      );
    }
  );
}
export default FabLabel;
