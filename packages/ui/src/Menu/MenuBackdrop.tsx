import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const MenuBackdrop = ({ children, ...props }: any, ref: any) => {
  const { StyledMenuBackdrop } = React.useContext(UIContext);
  return (
    <StyledMenuBackdrop ref={ref} {...props}>
      {children}
    </StyledMenuBackdrop>
  );
};

export default forwardRef(MenuBackdrop);
