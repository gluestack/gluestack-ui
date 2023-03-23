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

export const Actionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
});

import {
  Root as SelectRoot,
  Icon as SelectIcon,
  Item as SelectItem,
  ItemList as SelectItemList,
} from './styled-components';

export const Select = createSelect(
  {
    Root: SelectRoot,
    Icon: SelectIcon,
    Item: SelectItem,
    ItemList: SelectItemList,
  },
  { Actionsheet }
) as any;
