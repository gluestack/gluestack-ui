import type React from 'react';
import { Divider as DividerMain } from './Divider';

export function createDivider<StyledDividerProps>({
  StyledDivider,
}: {
  StyledDivider: React.ComponentType<StyledDividerProps>;
}) {
  const Divider = DividerMain(StyledDivider);
  Divider.displayName = 'Divider';
  return Divider;
}
