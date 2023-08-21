import { createFab } from '@gluestack-ui/fab';
import { Root, Label, Icon } from './styled-components';

export const Fab = createFab({ Root, Label, Icon });
export const FabLabel = Fab.Label;
export const FabIcon = Fab.Icon;
