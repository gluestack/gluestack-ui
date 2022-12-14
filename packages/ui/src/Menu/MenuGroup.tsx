import React, { memo, forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const MenuGroup = ({ children, ...props }: any, ref: any) => {
  const { StyledMenuGroup } = React.useContext(UIContext);

  return (
    <>
      <StyledMenuGroup {...props} ref={ref}>
        {children}
      </StyledMenuGroup>
    </>
  );
};

export default memo(forwardRef(MenuGroup));
