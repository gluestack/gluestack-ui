import { createSelect } from '@gluestack-ui/select';
import { createActionsheet } from '@gluestack-ui/actionsheet';

import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
} from './styled-components-actionsheet';

import {
  Root as StyledSelectRoot,
  Trigger as StyledSelectTrigger,
  Input as StyledSelectInput,
  Icon as StyledSelectIcon,
} from './styled-components';

export const Actionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
});

export const Select = createSelect(
  {
    Root: StyledSelectRoot,
    Trigger: StyledSelectTrigger,
    Input: StyledSelectInput,
    Icon: StyledSelectIcon,
  },
  {
    Portal: Actionsheet,
    Backdrop: Actionsheet.Backdrop,
    Content: Actionsheet.Content,
    DragIndicator: Actionsheet.DragIndicator,
    DragIndicatorWrapper: Actionsheet.DragIndicatorWrapper,
    Item: Actionsheet.Item,
    ItemText: Actionsheet.ItemText,
  }
) as any;
