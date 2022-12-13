import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const ModalBody = ({ children, ...props }: any, ref?: any) => {
  const { StyledModalBody } = React.useContext(UIContext);

  return (
    <StyledModalBody ref={ref} {...props}>
      {children}
    </StyledModalBody>
  );
};

export default forwardRef(ModalBody);
