import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import type { ViewProps } from 'react-native';

export default function BadgeIcon({ children, ...props }: ViewProps) {
  const { StyledBadgeIcon } = useContext(UIContext);

  return <StyledBadgeIcon {...props}>{children}</StyledBadgeIcon>;
}
