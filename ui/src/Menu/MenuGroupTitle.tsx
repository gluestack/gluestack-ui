import React, { forwardRef, useContext } from 'react';
import { UIContext } from '../UIProvider';

export const MenuGroupTitle = ({ children, ...props }: any) => {
  const { StyledMenuGroupTitle } = useContext(UIContext);

  return <StyledMenuGroupTitle {...props}>{children}</StyledMenuGroupTitle>;
};

export default forwardRef(MenuGroupTitle);
