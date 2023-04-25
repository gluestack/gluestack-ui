import FabMain from './Fab';
import FabLabel from './FabLabel';
import type { IFabComponentType } from './types';

export function createFab<StyledFab, StyledFabLabel>({
  Root,
  Label,
}: {
  Root: React.ComponentType<StyledFab>;
  Label: React.ComponentType<StyledFabLabel>;
}) {
  const Fab: any = FabMain(Root);
  Fab.Label = FabLabel(Label);

  Fab.displayName = 'Fab';

  return Fab as IFabComponentType<StyledFab, StyledFabLabel>;
}
