import type React from 'react';
import { Switch as SwitchMain } from './Switch';

export function createSwitch<StyledSwitchProps>({
  Root,
}: {
  Root: React.ComponentType<StyledSwitchProps>;
}) {
  const Switch = SwitchMain(Root);

  Switch.displayName = 'Switch';
  return Switch;
}
