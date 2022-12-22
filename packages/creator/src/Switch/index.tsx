import { Switch as SwitchMain } from './Switch';

export const createSwitch = ({ StyledSwitch }: any) => {
  const Switch = SwitchMain(StyledSwitch) as any;

  Switch.displayName = 'Switch';
  return Switch;
};
