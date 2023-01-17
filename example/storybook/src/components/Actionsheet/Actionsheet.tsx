import {
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetItemText,
  StyledActionsheetDragIndicator,
  StyledActionsheetBackdrop,
  StyledActionsheetDragIndicatorWrapper,
} from './styled-component';
import { createActionsheet } from '@universa11y/actionsheet';

export const Actionsheet = createActionsheet({
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetItemText,
  StyledActionsheetDragIndicator,
  StyledActionsheetBackdrop,
  StyledActionsheetDragIndicatorWrapper,
}) as any;
