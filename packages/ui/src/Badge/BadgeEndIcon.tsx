import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import type { ViewProps } from 'react-native';

export default function BadgeEndIcon({ children, ...props }: ViewProps) {
  const { StyledBadgeEndIcon } = useContext(UIContext);

  return <StyledBadgeEndIcon {...props}>{children}</StyledBadgeEndIcon>;
}
