import React, { createContext, forwardRef } from 'react';

export const AvatarContext = createContext<any>({});

const Avatar = (StyledAvatar: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAvatar ref={ref} {...props}>
        {children}
      </StyledAvatar>
    );
  });

export default Avatar;
