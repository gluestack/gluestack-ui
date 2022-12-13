import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import type { ViewProps } from 'react-native';

export default function BadgeStartIcon({ children, ...props }: ViewProps) {
  const { StyledBadgeStartIcon } = useContext(UIContext);

  return <StyledBadgeStartIcon {...props}>{children}</StyledBadgeStartIcon>;
}
