import React, { forwardRef } from 'react';
import type { ViewProps } from 'react-native';
import { useBadge } from './BadgeContext';

const BadgeIcon = (StyledBadgeIcon: any) =>
  forwardRef(({ children, ...props }: ViewProps) => {
    const { resolveContextChildrenStyle } = useBadge('Badge');

    const { ancestorStyle } = StyledBadgeIcon.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });
    return (
      <StyledBadgeIcon {...props} ancestorStyle={styledObject}>
        {children}
      </StyledBadgeIcon>
    );
  });

export default BadgeIcon;
