import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const Avatar = ({ children, ...props }: any, ref: any) => {
  const { StyledAvatar } = React.useContext(UIContext);

  return (
    <StyledAvatar ref={ref} {...props}>
      {children}
    </StyledAvatar>
  );
};

export default forwardRef(Avatar);
