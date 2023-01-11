import FabMain from './Fab';
import FabLabel from './FabLabel';
import type { IFabComponentType } from './types';

export function createFab<StyledFab, StyledFabLabel>({
  StyledFab,
  StyledFabLabel,
}: {
  StyledFab: React.ComponentType<StyledFab>;
  StyledFabLabel: React.ComponentType<StyledFabLabel>;
}) {
  const Fab: any = FabMain(StyledFab);
  Fab.Label = FabLabel(StyledFabLabel);

  Fab.displayName = 'Fab';

  // const Fab = FabTemp as IFabComponentType;
  return Fab as IFabComponentType<StyledFab, StyledFabLabel>;
}
