import React, { forwardRef } from 'react';
import type { ViewProps } from 'react-native';

const BadgeIcon = (StyledBadgeIcon: any) =>
  forwardRef(({ children, ...props }: ViewProps) => {
    return <StyledBadgeIcon {...props}>{children}</StyledBadgeIcon>;
  });

export default BadgeIcon;
