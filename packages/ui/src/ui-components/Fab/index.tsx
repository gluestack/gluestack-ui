import { StyledFab, StyledFabLabel } from '../../styled-components';
import { createFab } from '@gluestack/ui-creator';

export const Fab = createFab(StyledFab, StyledFabLabel) as any;
