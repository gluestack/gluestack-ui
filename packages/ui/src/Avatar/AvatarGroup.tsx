import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const AvatarGroup = ({ children, ...props }: any, ref: any) => {
  const { StyledAvatarGroup } = React.useContext(UIContext);
  return (
    <StyledAvatarGroup ref={ref} {...props}>
      {children}
    </StyledAvatarGroup>
  );
};

export default forwardRef(AvatarGroup);
