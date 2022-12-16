import React, { forwardRef } from 'react';

const Avatar = (StyledAvatar: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAvatar ref={ref} {...props}>
        {children}
      </StyledAvatar>
    );
  });

export default Avatar;
