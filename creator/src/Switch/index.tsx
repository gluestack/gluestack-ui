import { Switch } from './Switch';

export const createSwitch = ({ StyledSwitch }: any) => {
  const SwitchTemp = Switch(StyledSwitch) as any;
  return SwitchTemp;
};
