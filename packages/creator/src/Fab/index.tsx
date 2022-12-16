import FabMain from './Fab';
import FabLabel from './FabLabel';
import type { IFabComponentType } from './types';
export const createFab = (StyledFab: any, StyledFabLabel: any) => {
  const FabTemp: any = FabMain(StyledFab);
  FabTemp.Label = FabLabel(StyledFabLabel);
  const Fab = FabTemp as IFabComponentType;
  return Fab;
};
