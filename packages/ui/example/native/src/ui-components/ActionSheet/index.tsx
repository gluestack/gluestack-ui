import {
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetDragIndicator,
} from '../../styled-components';
import { createActionsheet } from '@gluestack/ui-creator';

export const ActionSheet = createActionsheet({
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetDragIndicator,
}) as any;
