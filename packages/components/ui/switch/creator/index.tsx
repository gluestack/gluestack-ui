import type React from 'react';
import { Switch as SwitchMain } from './Switch';
import type { ISwitchComponentType } from './types';

export function createSwitch<SwitchProps>({
  Root,
}: {
  Root: React.ComponentType<SwitchProps>;
}) {
  const Switch = SwitchMain(Root);

  Switch.displayName = 'Switch';
  return Switch as ISwitchComponentType<SwitchProps>;
}
