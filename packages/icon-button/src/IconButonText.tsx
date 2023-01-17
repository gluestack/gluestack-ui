import React, { forwardRef } from 'react';

function IconButonText<StyledIconButtonText>(
  StyledIconButtonText: React.ComponentType<StyledIconButtonText>
) {
  return forwardRef(
    (
      { children, ...props }: StyledIconButtonText & { children?: any },
      ref: any
    ) => {
      return (
        <StyledIconButtonText ref={ref} {...(props as StyledIconButtonText)}>
          {children}
        </StyledIconButtonText>
      );
    }
  );
}
export default IconButonText;
