import type React from 'react';
import { Divider as DividerMain } from './Divider';

export function createDivider<StyledDividerProps>({
  Root,
}: {
  Root: React.ComponentType<StyledDividerProps>;
}) {
  const Divider = DividerMain(Root);
  Divider.displayName = 'Divider';
  return Divider;
}
