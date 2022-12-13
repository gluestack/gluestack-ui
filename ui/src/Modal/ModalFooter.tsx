import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const ModalFooter = ({ children, ...props }: any, ref: any) => {
  const { StyledModalFooter } = React.useContext(UIContext);

  return (
    <StyledModalFooter ref={ref} {...props}>
      {children}
    </StyledModalFooter>
  );
};

export default forwardRef(ModalFooter);
