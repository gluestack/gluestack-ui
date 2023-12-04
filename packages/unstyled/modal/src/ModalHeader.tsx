import React, { forwardRef } from 'react';

const ModalHeader = (StyledModalHeader: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledModalHeader ref={ref} {...props}>
        {children}
      </StyledModalHeader>
    );
  });

export default ModalHeader;
