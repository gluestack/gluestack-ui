import React, { forwardRef } from 'react';
import { useBadge } from './BadgeContext';

const BadgeText = (StyledBadgeText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useBadge('Badge');

    let { ancestorStyle } = StyledBadgeText.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledBadgeText ref={ref} {...props} ancestorStyle={styledObject}>
        {children}
      </StyledBadgeText>
    );
  });

export default BadgeText;
