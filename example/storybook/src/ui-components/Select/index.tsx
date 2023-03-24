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
  Root as SelectRoot,
  Trigger as SelectTrigger,
  Input as SelectInput,
  Icon as SelectIcon,
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
    Root: SelectRoot,
    Trigger: SelectTrigger,
    Input: SelectInput,
    Icon: SelectIcon,
  },
  { Actionsheet }
) as any;
