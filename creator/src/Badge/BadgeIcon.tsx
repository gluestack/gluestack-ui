import React from 'react';
import type { ViewProps } from 'react-native';

const BadgeIcon =
  (StyledBadgeIcon: any) =>
  ({ children, ...props }: ViewProps) => {
    return <StyledBadgeIcon {...props}>{children}</StyledBadgeIcon>;
  };

export default BadgeIcon;
