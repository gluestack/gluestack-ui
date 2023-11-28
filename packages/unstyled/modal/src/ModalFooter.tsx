import React, { forwardRef } from 'react';

const ModalFooter = (StyledModalFooter: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledModalFooter ref={ref} {...props}>
        {children}
      </StyledModalFooter>
    );
  });

export default ModalFooter;
