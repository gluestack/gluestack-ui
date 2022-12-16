import React, { forwardRef } from 'react';

const IconButonText = (StyledIconButtonText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledIconButtonText ref={ref} {...props}>
        {children}
      </StyledIconButtonText>
    );
  });

export default IconButonText;
