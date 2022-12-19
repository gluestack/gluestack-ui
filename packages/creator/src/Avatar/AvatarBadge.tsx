import React, { forwardRef, useContext } from 'react';
import { AvatarContext } from './Avatar';

const AvatarBadge = (StyledAvatarBadge: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useContext(AvatarContext);

    const { ancestorStyle } = StyledAvatarBadge.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });
    return (
      <StyledAvatarBadge ref={ref} {...props} ancestorStyle={styledObject}>
        {children}
      </StyledAvatarBadge>
    );
  });

export default AvatarBadge;
