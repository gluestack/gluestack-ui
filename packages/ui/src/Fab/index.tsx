import FabMain from './Fab';
import FabLabel from './FabLabel';
import type { IFabComponentType } from './types';
const FabTemp: any = FabMain;
FabTemp.Label = FabLabel;
const Fab = FabTemp as IFabComponentType;

export { Fab };
