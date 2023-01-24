import React, { forwardRef } from 'react';

const ModalBody = (StyledModalBody: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledModalBody ref={ref} {...props}>
        {children}
      </StyledModalBody>
    );
  });

export default ModalBody;
