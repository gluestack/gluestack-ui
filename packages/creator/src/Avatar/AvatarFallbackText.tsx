import React, { forwardRef, useContext } from 'react';
import { AvatarContext } from './Avatar';

export const AvatarFallbackText = (StyledAvatarFallbackText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useContext(AvatarContext);

    const { ancestorStyle } = StyledAvatarFallbackText.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledAvatarFallbackText
        ref={ref}
        {...props}
        ancestorStyle={styledObject}
      >
        {children}
      </StyledAvatarFallbackText>
    );
  });
