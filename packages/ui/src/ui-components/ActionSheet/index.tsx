import {
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetItemText,
  StyledActionsheetDragIndicator,
  StyledActionsheetBackdrop,
  StyledActionsheetDragIndicatorWrapper,
} from '../../styled-components';
import { createActionsheet } from '@gluestack/ui-creator';

export const Actionsheet = createActionsheet({
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetItemText,
  StyledActionsheetDragIndicator,
  StyledActionsheetBackdrop,
  StyledActionsheetDragIndicatorWrapper,
}) as any;
