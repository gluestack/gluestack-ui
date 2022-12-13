import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const AvatarBadge = ({ children, ...props }: any, ref: any) => {
  const { StyledAvatarBadge } = React.useContext(UIContext);
  return (
    <StyledAvatarBadge ref={ref} {...props}>
      {children}
    </StyledAvatarBadge>
  );
};

export default forwardRef(AvatarBadge);
