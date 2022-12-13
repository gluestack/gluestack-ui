import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const ModalHeader = ({ children, ...props }: any, ref: any) => {
  const { StyledModalHeader } = React.useContext(UIContext);

  return (
    <StyledModalHeader ref={ref} {...props}>
      {children}
    </StyledModalHeader>
  );
};

export default forwardRef(ModalHeader);
