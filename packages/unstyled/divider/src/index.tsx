import type React from 'react';
import { Divider as DividerMain } from './Divider';
import { IDividerComponentType } from './types';

export function createDivider<DividerProps>({
  Root,
}: {
  Root: React.ComponentType<DividerProps>;
}) {
  const Divider = DividerMain(Root);
  Divider.displayName = 'Divider';
  return Divider as IDividerComponentType<DividerProps>;
}
