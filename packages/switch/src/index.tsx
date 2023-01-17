import type React from 'react';
import { Switch as SwitchMain } from './Switch';

export function createSwitch<StyledSwitchProps>({
  StyledSwitch,
}: {
  StyledSwitch: React.ComponentType<StyledSwitchProps>;
}) {
  const Switch = SwitchMain(StyledSwitch);

  Switch.displayName = 'Switch';
  return Switch;
}
