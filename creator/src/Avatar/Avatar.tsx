import React, { createContext, forwardRef } from 'react';

export const AvatarContext = createContext<any>({});

export const Avatar = (StyledAvatar: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAvatar ref={ref} {...props}>
        {({ resolveContextChildrenStyle }: any) => {
          return (
            <AvatarContext.Provider
              value={{
                resolveContextChildrenStyle: resolveContextChildrenStyle,
              }}
            >
              {children}
            </AvatarContext.Provider>
          );
        }}
      </StyledAvatar>
    );
  });
